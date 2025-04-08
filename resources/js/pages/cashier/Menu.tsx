import React from 'react'
import Layout from './Layout'
import Filters from '@/components/cashier/Filters'
import Header from '@/components/cashier/Header'
import Sidebar from '@/components/cashier/Sidebar'
import List from '@/components/cashier/List'

const Menu = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='p-6 flex flex-col gap-y-9 w-full'>
                    <Header title="Daftar Menu" description="Silahkan pilih menu, kemudian tekan tambah untuk memasukkan ke keranjang" />
                    <Filters />
                    <List />
                </div>

                <Sidebar />
            </div>
        </>
    )
}

Menu.layout = (page: React.ReactNode) => <Layout children={page} title="Menu" />

export default Menu;