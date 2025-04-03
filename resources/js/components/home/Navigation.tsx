import { Link } from '@inertiajs/react'
import React from 'react'

const menus = [
    {
        title: 'Menu',
        href: '/',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12ZM3 20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20ZM13 20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20ZM14 3C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H14Z"></path></svg>
    },
    {
        title: 'Riwayat',
        href: '/histories',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path></svg>
    }
];

interface NavigationMenuProps {
    title: string,
    href: string,
    icon: React.ReactNode,
    active: boolean
}

const NavigationMenu = (props: NavigationMenuProps) => {
    const { title, href, icon, active } = props;

    return (
        <li>
            <Link className={`flex items-center gap-x-1.5 ${active ? 'bg-orange-50' : 'bg-transparent'} px-7 py-2 rounded-[15px]`} href={href}>
                <span className={`w-4 h-4 ${active ? 'text-orange-400' : 'text-slate-800'}`}>{icon}</span>
                <span className={`text-[12px] ${active ? 'text-orange-400 font-semibold' : 'text-slate-800 font-normal'}`}>{title}</span>
            </Link>
        </li>
    )
}

const Navigation = () => {
    const pathname = window.location.pathname;

    return (
        <ul className='flex items-center gap-2 absolute left-1/2 -translate-x-1/2'>
            {
                menus.map((menu, index) => {
                    return <NavigationMenu key={index} title={menu.title} href={menu.href} icon={menu.icon} active={pathname === menu.href} />
                })
            }
        </ul>

    )
}

export default Navigation