import React from 'react'
import SearchItem from './SearchItem'

const Header = ({title, length, search, setSearch}) => {
  return (
    <div className='header'>
        <h2 className='title'>{title}</h2>
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
    </div>
  )
}

export default Header