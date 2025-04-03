import React from 'react'
import Layout from './Layout'

const History = () => {
    return (
        <div>History</div>
    )
}

History.layout = (page: React.ReactNode) => <Layout children={page} title='Riwayat' />

export default History;