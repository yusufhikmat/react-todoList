import React from 'react'
import ItemLists from './ItemLists';

const Content = ({items, handleCheck, handleDelete}) => {
 
  return (
    <div className='content'>
        <ul>
        {items.length > 0 ? (
            <ItemLists items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
            />
        ) : (<p>The list is empty</p>)}
            
        </ul>
    </div>
  )
}

export default Content