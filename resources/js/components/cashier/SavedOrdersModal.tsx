import Modal from "../Modal";

interface SaverOderModalProps {
    show: boolean
    onClose: () => void
}

/**
 * Saved order modal
 */
const SavedOrdersModal = (props: SaverOderModalProps) => {
    const { show, onClose = () => { } } = props;

    return (
        <Modal show={show}>
            <div className="flex justify-between items-center border-b border-b-slate-200 px-7 py-3">
                <div className='flex flex-col gap-y-1'>
                    <h1 className='font-bold text-[16px] text-slate-800'>Pesanan Tersimpan</h1>
                </div>

                <button type="button" className="w-5 h-5 cursor-pointer hover:brightness-95" onClick={onClose}>
                    <span className="w-1 h-1 text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></span>
                </button>
            </div>

            <div className="px-5 my-5 flex flex-col gap-3">
                <label className="flex border border-slate-200 rounded-[15px] px-5 py-2 gap-2 items-center w-fit min-w-[400px]">
                    <span className="">
                        <svg className="text-slate-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                    </span>

                    <input type="text" className="focus:outline-0 text-slate-800 placeholder:text-slate-400 text-[12px]" placeholder="Cari Pesanan..." />
                </label>
                <div className="relative overflow-x-auto h-[500px] rounded-[15px]">
                    <table className="w-full text-sm text-left rtl:text-right text-slate-800 border">
                        <thead className="text-xs text-slate-800 uppercase sticky top-[-1px] bg-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    Deskripsi
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    Pelanggan
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3 font-semibold">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <tr key={index} className="even:bg-white odd:bg-slate-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap text-end">
                                        {index + 1}.
                                    </th>
                                    <td className="px-6 py-4">
                                        Untuk tanggal 15
                                    </td>
                                    <td className="px-6 py-4">
                                        Arza
                                    </td>
                                    <td className="px-6 py-4">
                                        15-09-2023 12:00
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button type="button" className="bg-red-400 w-7 h-7 flex justify-center items-center cursor-pointer hover:brightness-95 rounded-[5px]">
                                                <svg className="text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                                            </button>
                                            <button type="button" className="px-2 py-1 bg-orange-400 text-white rounded-md hover:brightness-95 cursor-pointer">
                                                Terapkan
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-slate-800 mb-4 md:mb-0 block w-full md:inline md:w-auto">Menampilkan <span className="font-semibold text-slate-800">1-10</span> dari <span className="font-semibold text-slate-800">1000</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-slate-800 border border-slate-200 rounded-s-lg ">Previous</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-800 border border-slate-200 ">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-800 border border-slate-200 ">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-slate-800 border border-slate-200 bg-slate-50 hover:brightness-95">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-800 border border-slate-200 ">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-800 border border-slate-200 ">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-slate-800 border border-slate-200 rounded-e-lg ">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>



        </Modal>
    )
}

export default SavedOrdersModal