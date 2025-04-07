import { Link, router, usePage } from '@inertiajs/react';
import React, { useEffect, useRef } from 'react'
import { toast } from 'react-toastify';

const linkItems = [
    {
        title: 'Dashboard',
        href: '/dashboard'
    },
]
const LinkItem = (props: { title: string }) => {
    const { title } = props;

    return (
        <div className='text-slate-800 font-normal text-[12px] px-4 inline-block py-3 hover:brightness-90 bg-white/80 w-full'>
            {title}
        </div>

    )
}

const Profile = () => {
    const { user, company_name } = usePage().props;
    const [showMenu, setShowMenu] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        if (!confirm('Apakah Anda yakin ingin logout?')) return;
        router.visit('/logout');
    }

    const toggleMenu = (event: React.MouseEvent) => {
        event.stopPropagation();
        setShowMenu((currentValue) => !currentValue);
    }

    return (
        <div ref={menuRef}>
            <button type='button' className='flex items-center gap-x-6 cursor-pointer relative' onClick={toggleMenu}>
                <div className='flex flex-col text-[12px] text-start text-slate-800'>
                    <p className='font-normal'>{company_name}</p>
                    <p className='font-semibold'>{user.name}</p>
                </div>

                <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                    <img className='object-cover w-full h-full' src="https://placehold.co/600x400" alt="" />
                </div>

                {showMenu && (
                    <ul className="bg-white/80 rounded-[15px] border border-slate-200 absolute top-[60px] right-0 w-[150px] overflow-hidden">
                        {linkItems.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    <LinkItem title={link.title} />
                                </Link>
                            </li>
                        ))}

                        <li onClick={handleLogout}>
                            <LinkItem title='Logout' />
                        </li>
                    </ul>
                )}
            </button>
        </div>
    )
}

export default Profile