import React from 'react'
import Layout from './Layout'
import Header from '@/components/cashier/Header'
import Table from '@/components/history/Table'
import Search from '@/components/history/Search'

const History = () => {
    return (
        <div className='p-6 flex flex-col w-full gap-y-9'>
            <Header title="Riwayat Pesanan" description='Transaksi 24 jam terakhir akan muncul disini. Tekan untuk melakukan aksi atau melihat detail.' />
            <Search />
            <Table />
        </div>
    )
}

History.layout = (page: React.ReactNode) => <Layout children={page} title='Riwayat' />

export default History;