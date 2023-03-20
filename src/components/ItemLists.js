import { FaRegTrashAlt } from "react-icons/fa";

const ItemLists = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
        {
            items.map((item)=>(
                <li className='lists' key={item.id}>
                <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                />
                <label 
                onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}</label>
                <FaRegTrashAlt 
                    onClick={()=>handleDelete(item.id)}
                    className='delete'
                    role="button"
                    tabIndex="0"
                />
                </li>
            ))
        }
    </div>
  )
}

export default ItemLists