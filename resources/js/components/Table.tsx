import React, { useEffect, useRef, useState } from 'react';
import Search from './history/Search';

interface Datafield {
    key: string;
    label: string;
    type?: string;
    width?: string;
    sortable?: boolean;
    children?: React.ReactElement | string | number;
}

interface Options {
    showIndex?: boolean;
    height?: string;
    pagination?: boolean;
    totalPage?: number;
    sortable?: boolean;
}

interface TableProps {
    datafields: Datafield[];
    options?: Options;
    data: {
        [key: string]: string;
    }[];
}

const Table = (props: TableProps) => {
    const { datafields, data = [], options = {} } = props;
    const { showIndex = true, height = '100%', pagination = false, totalPage = 0 } = options;

    const [currentPage, setCurrentPage] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const toggleFilter = (event: { stopPropagation: () => void }) => {
        event.stopPropagation();

        setShowFilter((currentValue) => !currentValue);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setShowFilter(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-2">
                    <div className="w-[500px]">
                        <Search placeholder="Cari pelanggan..." />
                    </div>

                    <div className="relative" ref={filterRef}>
                        <button
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-[15px] border border-slate-200 bg-white px-3 py-2 text-[14px] font-normal text-slate-800"
                            onClick={toggleFilter}
                        >
                            <span className="w-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"></path>
                                </svg>
                            </span>
                            <span className="whitespace-nowrap">Urutkan Hasil</span>
                        </button>

                        {showFilter ? (
                            <ul className="absolute top-[120%] right-0 z-10 overflow-hidden rounded border border-slate-200 bg-white">
                                {datafields
                                    .filter((datafield) => datafield.sortable)
                                    .map((datafield, index) => (
                                        <>
                                            <li key={index}>
                                                <button className="inline-block w-full cursor-pointer bg-white px-5 py-2 text-[14px] text-nowrap text-slate-800 hover:brightness-95">
                                                    {datafield.label} - Ascending
                                                </button>
                                            </li>
                                            <li key={index}>
                                                <button className="inline-block w-full cursor-pointer bg-white px-5 py-2 text-[14px] text-nowrap text-slate-800 hover:brightness-95">
                                                    {datafield.label} - Descending
                                                </button>
                                            </li>
                                        </>
                                    ))}
                            </ul>
                        ) : (
                            ''
                        )}
                    </div>
                </div>

                <div className={`relative overflow-x-auto rounded-[15px]`} style={{ height }}>
                    <table className="w-full border text-left text-sm text-slate-800 rtl:text-right">
                        <thead className="sticky top-[-1px] bg-white text-xs text-slate-800 uppercase">
                            <tr>
                                {showIndex ? <Th>No.</Th> : ''}
                                {datafields.length > 0 ? datafields.map((datafield, index) => <Th key={index}>{datafield.label}</Th>) : ''}
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="odd:bg-slate-50 even:bg-white">
                                        {showIndex && <Td className="w-1 text-end">{rowIndex + 1}</Td>}

                                        {Array.from({ length: datafields.length }).map((_, colIndex) => {
                                            const datafield = datafields[colIndex];
                                            const value = row[datafield.key];
                                            const type = datafield.type || 'text';

                                            switch (type) {
                                                case 'raw':
                                                    return <Td key={colIndex}>{datafield.children}</Td>;
                                                case 'string':
                                                    return <Td key={colIndex}>{value}</Td>;
                                                default:
                                                    return <></>;
                                            }
                                        })}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={datafields.length + (showIndex ? 1 : 0)} className="py-4 text-center">
                                        Tidak ada data.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {pagination ? (
                    <nav className="flex-column flex flex-wrap items-center justify-between md:flex-row" aria-label="Table navigation">
                        <span className="mb-4 block w-full text-sm font-normal text-slate-800 md:mb-0 md:inline md:w-auto">
                            Menampilkan <span className="font-semibold text-slate-800">1-10</span> dari{' '}
                            <span className="font-semibold text-slate-800">1000</span>
                        </span>

                        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
                            <li>
                                <PaginationButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                    Kembali
                                </PaginationButton>
                            </li>

                            {Array.from({ length: totalPage }, (_, i) => i + 1)
                                .filter((page) => page === 1 || page === totalPage || Math.abs(page - currentPage) <= 2)
                                .map((page, index) => (
                                    <li key={index}>
                                        <PaginationButton onClick={() => setCurrentPage(page)} active={currentPage === page}>
                                            {page}
                                        </PaginationButton>
                                    </li>
                                ))}

                            <li>
                                <PaginationButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>
                                    Berikutnya
                                </PaginationButton>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default Table;

const Th = ({ children }: { children: React.ReactElement | number | string }) => {
    return (
        <th scope="col" className="px-6 py-3 font-semibold">
            {children}
        </th>
    );
};

interface TdProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
    children: React.ReactNode;
}

const Td = (props: TdProps) => {
    const { children, className, ...restProps } = props;

    return (
        <td className={`px-6 py-4 ${className || ''}`} {...restProps}>
            {children}
        </td>
    );
};

interface PaginationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    className?: string;
    children: React.ReactNode | number | string;
}

const PaginationButton = (props: PaginationProps) => {
    const { children, className, active = false, ...restProps } = props;

    return (
        <button
            type="button"
            className={`flex h-8 cursor-pointer items-center justify-center border px-3 leading-tight hover:brightness-95 focus:outline-0 focus:brightness-95 disabled:brightness-95 ${active ? 'bg-orange-400 text-white' : 'border-slate-200 bg-white text-slate-800'} ${className ? className : ''}`}
            {...restProps}
        >
            {children}
        </button>
    );
};
