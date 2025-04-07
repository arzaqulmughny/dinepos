import Navigation from '@/components/cashier/Navigation';
import Profile from '@/components/cashier/Profile';
import { Head, Link, usePage } from '@inertiajs/react'
import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Layout = (props: { children: React.ReactNode, title: string }) => {
    const { children, title } = props;
    const { flash } = usePage<{ flash: { message?: string } }>().props;

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, []);

    return (
        <>
            <Head title={title} />
            <div className='flex flex-col'>
                <nav className='flex justify-between items-center px-5 py-3 bg-white border border-b-slate-200 border-l-0 border-r-0 sticky top-0 z-10'>
                    <Link href="/" className='w-[32px]'>
                        <img className='w-full object-contain h-full' src="/assets/images/dinepos-colored.png" alt="DinePOS Logo" />
                    </Link>

                    <Navigation />

                    <Profile />
                </nav>

                {children}
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover={false}
                draggable
                closeButton={false}
                theme="light"
                limit={1}
                transition={Bounce}
            />
        </>
    )
}

export default Layout;