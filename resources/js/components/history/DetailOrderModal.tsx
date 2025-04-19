import Modal from '../Modal';

interface DetailOrderModalProps {
    show: boolean;
    onClose: () => void;
    onPrintInvoice: () => void;
}

/**
 * Saved order modal
 */
const DetailOrderModal = (props: DetailOrderModalProps) => {
    const { show, onClose = () => {} } = props;

    return (
        <Modal show={show}>
            <div className="flex flex-col gap-y-9 p-15">
                <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text- text-slate-800">Pesanan #</h1>
                        <p className="text-2xl font-semibold text-slate-800">123123123</p>
                    </div>

                    <div className="flex aspect-square h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full bg-orange-50">
                        <svg className="h-6 w-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"></path>
                        </svg>
                    </div>
                </div>

                <ul className="grid grid-cols-2 gap-9">
                    <li>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-slate-800">Pelanggan</span>
                            <span className="font-semibold text-slate-800">Faiz (Tidak Terdaftar)</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-slate-800">Kasir</span>
                            <span className="font-semibold text-slate-800">Arza</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-slate-800">Waktu</span>
                            <span className="font-semibold text-slate-800">30 Maret 2025 13:30</span>
                        </div>
                    </li>
                </ul>

                <hr />

                <div className="flex flex-col gap-y-10">
                    <h1 className="text-xl font-bold text-slate-800">Daftar Pesanan (2)</h1>

                    <ul className="flex flex-col gap-y-5">
                        <li>
                            <div className="flex justify-between">
                                <span className="text-[14px] text-slate-800">1x Nasi Ayam Geprek</span>
                                <span className="text-[14px] font-semibold text-slate-800">Rp. 25.000.00</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <span className="text-[14px] text-slate-800">1x Nasi Ayam Geprek</span>
                                <span className="text-[14px] font-semibold text-slate-800">Rp. 25.000.00</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <span className="text-[14px] text-slate-800">1x Nasi Ayam Geprek</span>
                                <span className="text-[14px] font-semibold text-slate-800">Rp. 25.000.00</span>
                            </div>
                        </li>
                        <li className="mt-5">
                            <div className="flex justify-between">
                                <span className="text-xl font-semibold text-slate-800">Total</span>
                                <span className="text-xl font-semibold text-slate-800">Rp. 25.000.00</span>
                            </div>
                        </li>
                    </ul>

                    <div className="flex items-center justify-center gap-16">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex cursor-pointer items-center gap-2 rounded-[15px] bg-white px-5 py-2 hover:brightness-95"
                        >
                            <span>
                                <svg className="w-4 text-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                                </svg>
                            </span>
                            <span className="text-[14px] font-normal text-slate-800">Kembali</span>
                        </button>

                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2 rounded-[15px] bg-orange-400 px-5 py-2 hover:brightness-95"
                        >
                            <span>
                                <svg className="w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 3.5L4.5 9H10V3.5Z"></path>
                                </svg>
                            </span>
                            <span className="text-[14px] font-normal text-white">Cetak Tagihan</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DetailOrderModal;
