import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, show }: { show: boolean, children: React.ReactNode }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show]);

    if (show) {
        return createPortal(<div className="fixed bg-black/50 w-screen h-screen left-0 top-0 z-30 flex justify-center items-center backdrop-blur-xs">
            <div className="bg-white/95 absolute rounded-[15px] overflow-hidden border border-slate-200">
                {children}
            </div>
        </div>, document.body)
    }
}

export default Modal;

const useModal = () => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((currentValue) => !currentValue);
    }

    const close = () => {
        setShow(false);
    }

    const open = () => {
        setShow(true);
    }

    return {
        show,
        toggle,
        close,
        open
    }
}

export { useModal }