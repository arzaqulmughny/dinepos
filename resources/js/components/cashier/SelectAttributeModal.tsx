import Modal from "../Modal";

interface SaverOderModalProps {
    show: boolean;
    onClose: () => void;
    onAdd: () => void;
}

/**
 * Saved order modal
 */
const SelectAttributeModal = (props: SaverOderModalProps) => {
    const { show, onClose, onAdd } = props;

    return (
        <Modal show={show}>
            <div className="flex justify-between items-center border-b border-b-slate-200 px-7 py-3">
                <div className='flex flex-col gap-y-1'>
                    <h1 className='font-bold text-[16px] text-slate-800'>Pilih Varian</h1>
                </div>

                <button type="button" className="w-5 h-5 cursor-pointer hover:brightness-95" onClick={onClose}>
                    <span className="w-1 h-1 text-slate-800"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></span>
                </button>
            </div>


            <div className="p-7 flex flex-col gap-7">
                <ul className="flex flex-col gap-7 max-h-[400px] overflow-auto ">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className="flex flex-col gap-2">
                            <h2 className='font-bold text-[16px] text-slate-800'>Pilihan Sambal <span className="text-red-400 font-normal">*</span></h2>
                            <ul className="flex gap-x-3 gap-y-2 flex-wrap">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <li key={index}>
                                        <AttributeOption selected={index == 3 ? true : false} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center gap-16 items-center">
                    <button type="button" onClick={onClose} className="bg-white flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                        <span><svg className="text-slate-800 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></span>
                        <span className="text-slate-800 font-normal text-[14px]">Batal</span>
                    </button>
                    <button type="button" onClick={onAdd} className="bg-orange-400 flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                        <span><svg className="text-white w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></span>
                        <span className="text-white font-normal text-[14px]">Tambah Pesanan</span>
                    </button>
                </div>
            </div>

        </Modal>
    )
}

export default SelectAttributeModal

interface AttributeOptionProps {
    selected?: boolean
}

const AttributeOption = (props: AttributeOptionProps) => {
    const { selected = false } = props;

    return (
        <button type="button" className={`${selected ? 'bg-orange-400 text-white font-semibold border-orange-400' : 'border-slate-200 bg-white'} border rounded-[15px] font-normal text-[14px] text-slate-800 px-5 py-1 cursor-pointer hover:brightness-95`}>Matah</button>
    )
}