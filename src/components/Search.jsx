const Search = (props) => {
    const {search, setSearch} = props;
    
    return (
        <div className="relative text-gray-200/70">
            <svg className="absolute top-0 bottom-0 left-2 my-auto" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.54167 1.75C6.54728 1.75 7.5117 2.14948 8.22278 2.86055C8.93386 3.57163 9.33333 4.53605 9.33333 5.54167C9.33333 6.48083 8.98917 7.34417 8.42333 8.00917L8.58083 8.16667H9.04167L11.9583 11.0833L11.0833 11.9583L8.16667 9.04167V8.58083L8.00917 8.42333C7.32115 9.01062 6.44625 9.33328 5.54167 9.33333C4.53605 9.33333 3.57163 8.93386 2.86055 8.22278C2.14948 7.5117 1.75 6.54728 1.75 5.54167C1.75 4.53605 2.14948 3.57163 2.86055 2.86055C3.57163 2.14948 4.53605 1.75 5.54167 1.75M5.54167 2.91667C4.08333 2.91667 2.91667 4.08333 2.91667 5.54167C2.91667 7 4.08333 8.16667 5.54167 8.16667C7 8.16667 8.16667 7 8.16667 5.54167C8.16667 4.08333 7 2.91667 5.54167 2.91667Z" fill="currentColor"/>
            </svg>
            <input className="pl-7 h-6 bg-inherit border border-gray-500/30" placeholder="Search" type="text" name="search" id="search" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        
    )
}

export default Search