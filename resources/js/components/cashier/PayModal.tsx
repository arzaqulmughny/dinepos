import { ReactElement, useEffect, useState } from "react";
import Modal from "../Modal";
import { rupiahFormatter } from "@/lib/utils";

interface SaverOderModalProps {
    show: boolean
    onClose?: () => void
}

enum Step {
    payment = 'payment',
    confirm = 'confirm',
    completed = 'completed'
}

/**
 * Saved order modal
 */
const PayModal = (props: SaverOderModalProps) => {
    const { show, onClose = () => { } } = props;
    const [value, setValue] = useState<number>(0);

    const [currentStep, setCurrentStep] = useState<Step>(Step.confirm);

    const onChangeValue = (number: number) => {
        const newValue = value.toString() + number.toString();

        setValue(parseInt(newValue));
    }

    const onDeleteValue = () => {
        if (value == 0) return;
        const newValue = value.toString().slice(0, -1);

        if (newValue == "") {
            setValue(0);
            return;
        }

        setValue(parseInt(newValue));
    }

    useEffect(() => {
        if (currentStep === Step.completed) {
            setTimeout(() => {
                setCurrentStep(Step.payment);
                onClose();
            }, 3000)
        }
    }, [currentStep])

    if (currentStep === Step.payment) {
        return (
            <Modal show={show}>
                <div className="px-7 flex flex-col gap-9 py-7 items-center">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex justify-center items-center">
                            <svg className="text-orange-400 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z"></path></svg>
                        </div>

                        <h1 className='font-bold text-[16px] text-slate-800'>Masukkan Nominal Pembayaran</h1>
                    </div>

                    <input type="text" className="border-b pb-4 pointer-events-none border-b-slate-200 w-full text-slate-800 text-center font-semibold  text-4xl tracking-[5px] pl-3 focus:outline-0" tabIndex={-1} value={rupiahFormatter(value)} readOnly />

                    <div className="grid grid-cols-[repeat(3,_65px)] gap-x-[40px] gap-y-[25px] w-full justify-center">
                        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((number) => (
                            <NumberButton onClick={() => onChangeValue(number)}>{number}</NumberButton>
                        ))}

                        <NumberButton onClick={() => { onChangeValue(0) }} className="col-start-2">0</NumberButton>

                        <NumberButton onClick={onDeleteValue}>
                            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM12.9993 10.5858L10.1709 7.75736L8.75668 9.17157L11.5851 12L8.75668 14.8284L10.1709 16.2426L12.9993 13.4142L15.8277 16.2426L17.242 14.8284L14.4135 12L17.242 9.17157L15.8277 7.75736L12.9993 10.5858Z"></path></svg>
                        </NumberButton>
                    </div>

                    <table className="text-slate-800 w-100 text-[14px]">
                        <tr>
                            <th className="py-2 w-1/2 text-start font-normal">Harus Dibayar</th>
                            <td className="py-2 w-1/2 text-end font-semibold">Rp. 95.000.00</td>
                        </tr>
                        <tr>
                            <th className="py-2 w-1/2 text-start font-normal">Kembalian</th>
                            <td className="py-2 w-1/2 text-end font-semibold">Rp. 0</td>
                        </tr>
                    </table>

                    <div className="flex justify-center gap-16 items-center">
                        <button type="button" onClick={onClose} className="bg-white flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                            <span><svg className="text-slate-800 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></span>
                            <span className="text-slate-800 font-normal text-[14px]">Kembali</span>
                        </button>
                        <button type="button" onClick={() => setCurrentStep(Step.confirm)} className="bg-orange-400 flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                            <span><svg className="text-white w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z"></path></svg></span>
                            <span className="text-white font-normal text-[14px]">Lanjutkan</span>
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }

    if (currentStep === Step.confirm) {
        return (
            <Modal show={show}>
                <div className="flex flex-col gap-9 p-7">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex justify-center items-center">
                            <svg className="text-orange-400 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z"></path></svg>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <h1 className='font-bold text-[16px] text-slate-800'>Konfirmasi Pesanan</h1>
                            <p className="text-slate-800 font-normal text-[12px]">Pesanan akan diselesaikan, Lanjutkan?</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-16 items-center">
                        <button type="button" onClick={() => setCurrentStep(Step.payment)} className="bg-white flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                            <span><svg className="text-slate-800 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></span>
                            <span className="text-slate-800 font-normal text-[14px]">Kembali</span>
                        </button>
                        <button type="button" onClick={() => setCurrentStep(Step.completed)} className="bg-orange-400 flex items-center gap-2 px-5 py-2 rounded-[15px] hover:brightness-95 cursor-pointer">
                            <span><svg className="text-white w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z"></path></svg></span>
                            <span className="text-white font-normal text-[14px]">Selesaikan</span>
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }

    if (currentStep === Step.completed) {
        return (
            <Modal show={show}>
                <div className="flex flex-col gap-9 p-7">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex justify-center items-center">
                            <svg className="text-orange-400 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
                        </div>

                        <div className="flex flex-col gap-2 items-center">
                            <h1 className='font-bold text-[16px] text-slate-800'>Pesanan Berhasil Diselesaikan</h1>
                            <p className="text-slate-800 font-normal text-[12px]">Lihat kembali detail pada menu riwayat.</p>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

}

interface NumberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactElement | string | number;
}

const NumberButton = (props: NumberButtonProps) => {
    const { children, className, ...restProps } = props;

    return (
        <button type="button" {...restProps} className={`bg-orange-50 text-orange-400 hover:brightness-95 cursor-pointer text-2xl aspect-square rounded-full flex justify-center items-center ${className || ''}`}>{children}</button>
    )
}

export default PayModal