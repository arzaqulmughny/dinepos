/**
 * Header component
 */
const Header = () => {
    return (
        <>
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-bold text-[22px] text-slate-800'>Daftar Menu</h1>
                <p className='font-normal text-[14px] text-slate-800'>Silahkan pilih menu, kemudian tekan tambah untuk memasukkan ke keranjang</p>
            </div>
        </>
    )
}

export default Header