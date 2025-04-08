interface HeaderProps {
    title: string;
    description: string;
}

/**
 * Header component
 */
const Header = (props: HeaderProps) => {
    const { title, description } = props;
    return (
        <>
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-bold text-[22px] text-slate-800'>{title}</h1>
                <p className='font-normal text-[14px] text-slate-800'>{description}</p>
            </div>
        </>
    )
}

export default Header