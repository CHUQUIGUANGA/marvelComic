import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const App = () => {
  const [categories, setCategories] = useState(['spider-man','batman']);

const onAddCategory = () =>{

setCategories([...categories,'nuevo'])
} 

  return (
    <>
    {/*titulo */}
    <div>App Marvel</div>

     {/*input */}
    <AddCategory setCategories={setCategories}/>

     {/*listado de imgs */}
     <ol>
      <button onClick={onAddCategory}>Agregar</button>
      {/*map recorre el arreglo o array */}
      {categories.map( category => {
        return <li key={category}>{category}</li>
      })} 
    
     </ol>
         {/*item marvel */}
    </>
  )
}



