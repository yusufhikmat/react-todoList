
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react'
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([
    {
        id:1,
        checked:false,
        item:"Items 1"
    },
    {
        id:2,
        checked:false,
        item:"Items 2"
    },
    {
        id:3,
        checked:true,
        item:"Items 3"
    },
])


const [newItems, setNewItems] = useState('')

const addItem = (item) =>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem]
  setItems(listItems);
  localStorage.setItem("shoppinglist", JSON.stringify(listItems))
}
const handleSubmit = (e)=>{
  e.preventDefault()
  if(!newItems)return;
addItem(newItems);
setNewItems("")
}
const handleCheck =(id)=>{
   // i mapped the items and return item.id is equal to the id,
    //using query string...., i accepted an item with an opposite type check or its initial item
    //
    const listItems = items.map((item)=>{
        return  item.id === id ? 
        { ...item, checked : !item.checked }: item 
        }
    )
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
}
const handleDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
}
  return (
    <div className="app">
      <Header title="My Groceries"/>
      <AddItem  
          newItems={newItems}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}
      />
      <Content  items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
  }
export default App;
