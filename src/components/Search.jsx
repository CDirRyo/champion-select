const Search = (props) => {
    const {search, setSearch} = props;
    return (
        <input type="text" name="search" id="search" value={search} onChange={e => setSearch(e.target.value)}/>
    )
}

export default Search