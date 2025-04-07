import { Order } from "@/types";

interface OrderItem extends Order {
    index: number;
}

const OrderItem = (props: OrderItem) => {
    return (
        <div className={`flex gap-x-5 p-4 px-6 cursor-pointer ${props.index % 2 !== 0 ? 'hover:bg-slate-50' : 'bg-slate-50 hover:brightness-95'}`}>
            <h1 className='text-slate-800 font-semibold text-xl leading-5'>{props.index}.</h1>
            <div className='rounded overflow-hidden w-[50px] h-[50px] min-w-[50px]'>
                <img className='w-full h-full' src={props.image} alt="" />
            </div>

            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-2 w-[180px]">
                    <h2 className='text-slate-800 font-semibold text-[14px] leading-3 text-nowrap text-ellipsis overflow-hidden h-[14px]'>{props.name}</h2>
                    <p className='text-slate-800 font-normal text-[12px] text-nowrap text-ellipsis overflow-x-hidden'>{props.attribute}</p>
                </div>

                <div className='flex bg-slate-100 rounded px-4 py-1 gap-x-3 hover:brightness-95'>
                    <div className='w-4 h-4 text-slate-500'>
                        <svg xmlns="http://www.w3 .org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15H14V22H3.99826C3.44694 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.44892 21 3.00748V15ZM21 17L16 21.9968V17H21Z"></path></svg>
                    </div>

                    <p className='text-slate-800 w-[90px] font-normal text-[12px] text-nowrap text-ellipsis overflow-x-hidden'>{props.notes ? props.notes : 'Masukkan catatan...'}</p>
                </div>
            </div>

            <div className="flex flex-col items-end justify-between ms-auto">
                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-x-2">
                        <button type='button' className="flex group cursor-pointer">
                            <div className='w-4 h-4 text-slate-800 group-hover:text-red-600'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></div>
                        </button>

                        <div className='bg-slate-100 rounded-[15px] flex items-center gap-x-3 p-1'>
                            <button type="button" className='w-6 h-6 text-slate-800 bg-slate-200 rounded-full overflow-hidden flex justify-center items-center hover:brightness-95 cursor-pointer'>
                                <div className="w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 11H5V13H19V11Z"></path></svg>
                                </div>
                            </button>
                            <span className='text-slate-800 font-normal text-[12px]'>
                                {props.quantity}
                            </span>
                            <button type="button" className='w-6 h-6 text-slate-800 bg-slate-200 rounded-full overflow-hidden flex justify-center items-center hover:brightness-95 cursor-pointer'>
                                <div className="w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <p className='text-slate-800 font-normal text-[12px]'>{props.available} porsi tersedia</p>
                </div>


                <p className='text-slate-800 font-semibold text-[14px] leading-4'>{props.price}</p>
            </div>
        </div>
    )
}

export default OrderItem;