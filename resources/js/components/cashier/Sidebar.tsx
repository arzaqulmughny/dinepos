import { Order } from "@/types";
import OrderItem from "@/components/cashier/OrderItem";
import { useEffect, useRef, useState } from "react";
import { useModal } from "@/components/Modal";
import SavedOrdersModal from "./SavedOrdersModal";

const orders: Order[] = [
    {
        id: 1,
        name: 'Nasi Ayam Geprek',
        sku: 'AYG-001',
        quantity: 1,
        available: 50,
        attribute: 'Sambal Bawang - Porsi Jumbo',
        image: 'https://placehold.co/50',
        price: 'Rp. 15.000.00',
        notes: 'Sambal dipisah',
    },
    {
        id: 2,
        name: 'Long text, very long text, Long text, very long text, Long text, very long text',
        sku: 'AYG-001',
        quantity: 100,
        available: 100,
        attribute: 'Sambal Bawang - Porsi Jumbo, Long text, very long text, Long text, very long text',
        image: 'https://placehold.co/50',
        price: 'Rp. 15.000.00',
        notes: 'Sambal dipisah, Long text, very long text, Long text, very long text, Long text, very long text',
    },
    {
        id: 3,
        name: 'Nasi Ayam Geprek',
        sku: 'AYG-001',
        quantity: 100,
        available: 100,
        attribute: 'Sambal Bawang - Porsi Jumbo',
        image: 'https://placehold.co/50',
        price: 'Rp. 15.000.00',
        notes: 'Sambal dipisah',
    },
];

const Sidebar = () => {

    return (
        <>
            <aside className='bg-white rounded-[15px] border border-slate-200 overflow-hidden m-1.5 py-6 sticky h-[calc(100vh-75px)] top-[70px] right-0 w-[700px] flex flex-col gap-y-5'>
                <div className='flex flex-col gap-y-1 px-7'>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-[16px] text-slate-800'>Daftar Pesanan ({orders.length})</h1>
                        <SidebarMenu />
                    </div>
                    <p className='font-normal text-[14px] text-slate-800'>Sesuaikan pesanan atau langsung terima pembayaran.</p>
                </div>

                <ul className='max-h-96 overflow-auto border-0 border-b border-b-slate-200 min-h-96' style={{ scrollbarWidth: 'thin' }}>
                    {orders.length > 0 && orders.map((order, index) => (
                        <li key={index}>
                            <OrderItem id={order.id} index={index + 1} sku={order.sku} name={order.name} attribute={order.attribute} quantity={order.quantity} notes={order.notes} available={order.available} price={order.price} image={order.image} />
                        </li>
                    ))}
                </ul>

                <div className='px-7 flex flex-col gap-y-6 h-full'>
                    <h1 className='font-bold text-[16px] text-slate-800'>Ringkasan</h1>

                    <ul className='flex flex-col gap-y-4'>
                        <li className='flex justify-between'>
                            <span className='text-slate-800 font-normal text-[14px]'>
                                Subtotal
                            </span>
                            <span className='text-slate-800 font-semibold text-[16px]'>Rp. 49.000.00</span>
                        </li>
                        <li className='flex justify-between'>
                            <span className='text-slate-800 font-normal text-[14px]'>
                                Diskon
                            </span>
                            <span className='text-slate-800 font-semibold text-[16px]'>-Rp. 2.000.00</span>
                        </li>
                        <li className='flex justify-between'>
                            <span className='text-slate-800 font-normal text-[14px]'>
                                Pajak
                            </span>
                            <span className='text-slate-800 font-semibold text-[16px]'>Rp. 5.000.00</span>
                        </li>

                        <li className='flex justify-between mt-3'>
                            <span className='text-slate-800 font-semibold text-[18px]'>
                                Total
                            </span>
                            <span className='text-slate-800 font-semibold text-[18px]'>Rp. 52.000.00</span>
                        </li>

                    </ul>

                    <div className='flex gap-x-3 mt-auto items-end justify-between'>
                        <button type="button" className='flex gap-x-2.5 items-center rounded-[15px] px-3.5 py-1.5 bg-orange-50 hover:brightness-95 cursor-pointer h-fit'>
                            <span className='w-4 h-4 text-orange-400'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg></span>
                            <span className='text-orange-400 font-normal text-[12px]'>
                                Pilih Pelanggan
                            </span>
                        </button>

                        <button type="button" className='flex gap-x-2.5 items-center rounded-[15px] px-3.5 py-1.5 bg-orange-400 hover:brightness-95 cursor-pointer h-fit'>
                            <span className='w-4 h-4 text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path></svg></span>
                            <span className='text-white font-semibold text-[12px]'>
                                Yuk Pesan
                            </span>
                        </button>

                        <ConfirmButton />
                    </div>
                </div>
            </aside>

        </>
    )
}

export default Sidebar;


const ConfirmButton = () => {
    const [showMore, setShowMore] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMore(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleShowMore = () => {
        setShowMore((currentValue) => !currentValue);
    }

    return (
        <div className="relative" ref={menuRef}>
            <div className="bg-orange-400 rounded-[15px] px-8 py-3 hover:brightness-95 overflow-hidden">
                <button type="button" className='flex gap-x-2.5 items-center cursor-pointer'>
                    <span className='w-4 h-4 text-white'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z"></path></svg></span>
                    <span className='text-white font-semibold text-[12px] mr-2 whitespace-nowrap'>
                        Proses
                    </span>
                </button>

                <button type="button" onClick={toggleShowMore} className='absolute right-0 top-0 h-full w-6 justify-center flex items-center bg-[#DB8035] rounded-r-[15px] cursor-pointer'>
                    <span className='w-4 h-4 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                    </span>
                </button>
            </div>

            {showMore && <ul className="bg-white/80 rounded-[15px] border border-slate-200 absolute bottom-[50px] right-0 w-[150px] overflow-hidden">
                <li>
                    <Menu title="Simpan Pesanan" />
                </li>
            </ul>}
        </div>
    )
}

/**
 * Sidebar menu
 */
const SidebarMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { show: showSavedOrders, open: openSavedOrders, close: closeSavedOrders } = useModal();


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleShowMenu = () => {
        setShowMenu((currentValue) => !currentValue);
    }

    return (
        <>
            <div className="relative" ref={menuRef}>
                <button type="button" className='bg-orange-50 rounded-full p-2 flex justify-center items-center hover:brightness-95 cursor-pointer' onClick={toggleShowMenu}>
                    <span className='text-orange-400 w-4 h-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                    </span>
                </button>

                {showMenu && <ul className="bg-white/80 rounded-[15px] border border-slate-200 absolute top-[40px] right-0 w-[150px] overflow-hidden">
                    <li>
                        <Menu title="Pesanan Tersimpan" onClick={() => {
                            toggleShowMenu();
                            openSavedOrders();
                        }} />
                        <Menu title="Reset" />
                    </li>
                </ul>}
            </div>

            <SavedOrdersModal show={showSavedOrders} onClose={closeSavedOrders} />
        </>
    )
}

interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

/**
 * Menu
 */
const Menu = (props: MenuProps) => {
    const { title, ...restProps } = props;

    return (
        <button type="button" className='text-slate-800 cursor-pointer font-normal text-[12px] px-4 inline-block py-3 hover:brightness-90 bg-white/80 w-full' {...restProps}>{title}</button>
    )
}