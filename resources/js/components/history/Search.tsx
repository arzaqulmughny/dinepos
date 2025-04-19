interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

/**
 * Search input component for history page
 */
const Search = (props: SearchProps) => {
    const { placeholder = 'Cari...', ...restProps } = props;

    return (
        <label className="flex w-full items-center justify-center gap-x-3.5 rounded-[15px] border border-slate-200 bg-white px-4 py-2">
            <span>
                <svg className="h-4 w-4 text-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
            </span>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full text-[14px] font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none"
                {...restProps}
            />
        </label>
    );
};

export default Search;
