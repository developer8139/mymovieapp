import '../search.css'

export const Search = ({search, setSearch}) => {

    const handleSearchValue = (e) => {
        setSearch(e.target.value)
    }


    return (
            <form className="search-form">
                <input className="search" placeholder="Enter a title" value={search} onChange={handleSearchValue}/>
            </form>
    )
}