
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useEffect, useState } from 'react'
import AddItem from './components/AddItem';

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([])
  const [newItems, setNewItems] = useState('')
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    const fetchItems = async ()=>{
      try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Did not ewcieve expected data")
          const listItems =await response.json();
          setItems(listItems)
          setError(null)
          setIsLoading(false)
      }catch(err){
        setError(err.message)
        
      }
    }
    setTimeout(() => {
      (async ()=>await fetchItems())()
    }, 2000);
  },[])
  
const addItem = (item) =>{
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem]
  setItems(listItems);
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if(!newItems){
    return;
  }
  else{ 
addItem(newItems);
setNewItems("")
}} 

const handleCheck =(id)=>{
  const listItems = items.map((item)=>{
        return  item.id === id ? 
        { ...item, checked : !item.checked }: item 
        }
    )
    setItems(listItems);
}

const handleDelete = (id)=>{
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);
}
  return (
    <div className="app">
      <Header 
          title="MyGroc" 
          length={items.length}
          search={search}
          setSearch={setSearch}
          />
      <AddItem  
          newItems={newItems}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}
      />
      <main>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{color:"red"}}>{error }</p>}
          {!error && !isLoading && 
          <Content  items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
          />}
      </main>
      <Footer/>
    </div>
  );
  }
export default App;
