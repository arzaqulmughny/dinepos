import Modal from '../Modal';
import Table from '../Table';

interface SaverOderModalProps {
    show: boolean;
    onClose: () => void;
    onSelect: () => void;
}

const datafields = [
    {
        key: 'name',
        label: 'Nama',
        type: 'string',
        sortable: true,
    },
    {
        key: 'phone_number',
        label: 'Nomor HP',
        type: 'string',
        sortable: true,
    },
    {
        key: 'actions',
        label: 'Aksi',
        type: 'raw',
        children: (
            <div className="flex items-center gap-2">
                <button type="button" className="cursor-pointer rounded-md bg-orange-400 px-2 py-1 text-white hover:brightness-95">
                    Pilih Pelanggan
                </button>
            </div>
        ),
    },
];

/**
 * Saved order modal
 */
const SelectCustomerModal = (props: SaverOderModalProps) => {
    const { show, onClose, onSelect } = props;

    return (
        <Modal show={show}>
            <div className="flex items-center justify-between border-b border-b-slate-200 px-7 py-3">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-[16px] font-bold text-slate-800">Pilih Pelanggan</h1>
                </div>

                <button type="button" className="h-5 w-5 cursor-pointer hover:brightness-95" onClick={onClose}>
                    <span className="h-1 w-1 text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                        </svg>
                    </span>
                </button>
            </div>

            <div className="my-5 px-5">
                <Table
                    datafields={datafields}
                    options={{ pagination: true }}
                    data={[
                        {
                            name: 'Arza',
                            phone_number: '08123123123',
                        },
                    ]}
                />
            </div>
        </Modal>
    );
};

export default SelectCustomerModal;
