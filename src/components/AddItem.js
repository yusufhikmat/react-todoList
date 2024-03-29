import React from 'react'

const AddItem = ({newItems, setNewItems, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
    <input 
        autoFocus
        id="addItem"
        type="text"
        placeholder='Add Item'
        required
        value={newItems}
        onChange={(e)=>setNewItems(e.target.value)}
    />
    <button 
        type="submit"
        aria-label='addItem'>
        +
    </button>
    </form>
  )
}

export default AddItem