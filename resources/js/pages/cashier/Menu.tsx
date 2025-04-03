import React from 'react'
import Layout from './Layout'

const Menu = () => {
    return (
        <>
            <div>Menu</div>
        </>
    )
}

Menu.layout = (page: React.ReactNode) => <Layout children={page} title="Menu" />

export default Menu;