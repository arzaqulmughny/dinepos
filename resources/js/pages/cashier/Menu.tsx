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
                    <Header />
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