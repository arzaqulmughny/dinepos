import { toast } from "react-toastify";
import { useModal } from "../Modal";
import SelectAttributeModal from "./SelectAttributeModal";

const PlusIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
    )
}

interface MenuItemProps {
    onAdd?: () => void;
}

const MenuItem = (props: MenuItemProps) => {
    const { onAdd = () => { } } = props;

    return (
        <div className="bg-white rounded-[15px] flex flex-col overflow-hidden">
            <div className='relative'>
                <img className='w-full' src="https://placehold.co/400" alt="" />
                <span className='absolute top-3 left-3 bg-yellow-400 text-white font-normal text-[10px] px-2 py-1 rounded-[5px]'>Best Seller</span>
            </div>

            <div className='flex flex-col gap-y-5 p-3.5'>
                <div className="flex flex-col gap-y-1">
                    <h1 className='text-slate-800 font-semibold text-lg'>Nasi Ayam Geprek</h1>
                    <p className='text-slate-500 text-[14px] leading-7'>Ayam goreng tepung yang dihancurkan dan diberi sambal pedas, disajikan dengan nasi putih.</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex flex-col gap-1">
                        <p className='text-green-500 text-[14px]'>7 porsi lagi</p>
                        <p className='text-slate-800 text-[16px] font-semibold'>Rp. 15.000.00</p>
                    </div>

                    <button type="button" onClick={onAdd} className='bg-orange-400 text-white hover:brightness-95 w-[42px] h-[42px] flex justify-center items-center rounded-full overflow-hidden cursor-pointer'>
                        <span className='w-6'>
                            <PlusIcon />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const List = () => {
    const { show: showSelectAttributeModal, open: openSelectAttributeModal, close: closeSelectAttributeModal } = useModal();

    const handleAddItemWithVariant = () => {
        closeSelectAttributeModal();
        toast.success('Berhasil menambahkan menu')
    }

    const handleAddItem = () => {
        openSelectAttributeModal();
    }

    return (
        <>
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[22px] w-full">
                {Array.from({ length: 10 }).map((_, index) => (
                    <li key={index}>
                        <MenuItem onAdd={handleAddItem} />
                    </li>
                ))}
            </ul>

            <SelectAttributeModal show={showSelectAttributeModal} onClose={closeSelectAttributeModal} onAdd={handleAddItemWithVariant} />
        </>
    )
}

export default List