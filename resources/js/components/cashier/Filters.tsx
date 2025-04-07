import { Link } from "@inertiajs/react"

/**
 * Dashborad icon
 */
const DashboardIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"></path></svg>
    )
}

/**
 * Sort icon
 */
const SortIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z"></path></svg>
    )
}

interface FilterButtonProps {
    label: string,
    icon?: React.ReactNode,
    active?: boolean,
}

const categories = [
    {
        name: 'Makanan',
        slug: 'foods',
    },
    {
        name: 'Minuman',
        slug: 'drinks',
    },
    {
        name: 'Side Dish',
        slug: 'side-dish',
    },
    {
        name: 'Dessert',
        slug: 'dessert',
    },
    {
        name: 'Lainnya',
        slug: 'others',
    }
];

/**
 * Filter button
 */
const FilterButton = (props: FilterButtonProps) => {
    const { label, icon, active = false } = props;

    return (
        <div className={`${active ? 'bg-orange-400' : 'bg-white'} h-[35px] px-7 flex justify-center items-center rounded-[15px] gap-x-2 cursor-pointer group hover:bg-orange-400`}>
            {icon ? <span className='w-4 text-slate-800 group-hover:text-white'>{icon}</span> : ''}
            <span className={`${active ? 'text-white' : 'text-slate-800'} font-normal text-[12px] group-hover:text-white text-nowrap`}>{label}</span>
        </div>
    )
}


/**
 * Filters component
 */
const Filters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const activeCategory = searchParams.get('category') ?? '';

    const appendSearchParams = (key: string, value: string): string => {
        const params = new URLSearchParams(window.location.search);
        params.set(key, value);

        return params.toString();
    }

    return (
        <>
            {/* Filters */}
            <div className='flex justify-between'>
                {/* Categories */}
                <ul className='flex gap-x-3 w-full'>
                    <li>
                        <Link href="/">
                            <FilterButton label='Semua' active={activeCategory == ''} />
                        </Link>
                    </li>

                    {categories.map((category, index) => (
                        <li key={index}>
                            <Link href={`?${appendSearchParams('category', category.slug)}`}>
                                <FilterButton label={category.name} active={activeCategory.toLowerCase() == category.slug} />
                            </Link>
                        </li>
                    ))}

                    <button type="button">
                        <FilterButton label='Semua Kategori' icon={<DashboardIcon />} />
                    </button>

                </ul>

                <button type="button">
                    <FilterButton label='Urut Berdasarkan Nama' icon={<SortIcon />} />
                </button>
            </div>
        </>
    )
}

export default Filters;