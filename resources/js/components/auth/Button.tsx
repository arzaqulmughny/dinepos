interface ButtonPropsInterface extends React.HTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children?: React.ReactNode
}

/**
 * Button component
 */
import React from 'react'

const Button = (props: ButtonPropsInterface) => {
    const { loading = false, children, ...restProps } = props;

    const disabled = restProps.disabled || loading; // Disabled if loading or disabled prop is set t

    return (
        <button type="submit" className="bg-orange-400 focus:outline-orange-800 rounded-md px-3 py-2 font-semibold cursor-pointer hover:brightness-90 active:brightness-90 disabled:saturate-0 disabled:cursor-not-allowed flex justify-center text-[12px]" disabled={disabled} {...restProps}>
            {loading ? <div className="w-6 animate-spin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path></svg>
            </div> : children}
        </button>
    )
}

export default Button