import React from 'react'

const SearchItem = ({search, setSearch}) => {
    const handleSearch = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleSearch} className="searchForm">
            <input 
                type="text"
                placeholder='Search'
                id="search"
                role="searchbox"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default SearchItem