const Undo = (props) => {
    const {undo} = props;
    return (
        <button className="flex gap-1 justify-center items-center mr-1 border border-gray-500/50 text-gray-200/70 h-6 w-28 hover:bg-gray-500/50 hover:text-white transition-all" onClick={undo}>
            
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.29163 4.66667C5.74579 4.66667 4.34579 5.25 3.26663 6.18334L1.16663 4.08334V9.33334H6.41663L4.30496 7.22167C5.11579 6.545 6.14829 6.125 7.29163 6.125C9.35663 6.125 11.1125 7.4725 11.725 9.33334L13.1075 8.87834C12.2966 6.43417 10.0041 4.66667 7.29163 4.66667Z" fill="currentColor"/>
</svg>
            Undo
            
        </button>
    )
}

export default Undo