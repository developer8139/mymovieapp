import '../search.css'

export const Search = ({search, setSearch}) => {

    const handleSearchValue = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className="container">
            <form className="search-form">
                <input className="search" placeholder="Enter a title" value={search} onChange={handleSearchValue}/>
            </form>
        </div>
    )
}