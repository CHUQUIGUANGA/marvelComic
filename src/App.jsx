import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { MarvelGrid } from "./components/MarvelGrid";


export const App = () => {
  // const [categories, setCategories] = useState(['spider-man']);
  const [categories, setCategories] = useState('hulk');
const onAddCategory = (newCategory) =>{
  //validamos si encuentra algun duplicado sino sale, incluso podemos ser mas estrictos 
  //if(categories.includes(newCategory)) return; 

  //setCategories([newCategory,...categories])
  setCategories(newCategory);
} 

  return (
    <>
  
    <div className="row text-center mb-3">
      <h1>MARVEL IMGS</h1>
    </div>

     {/*input entrada de datos*/}
    <AddCategory 
       onNewCategory = {(value)=>onAddCategory(value)}
    />

      {/*map recorre el arreglo o array */}
      {
          //categories.map( (category) => (
          //<MarvelGrid key={category} category={category}/>
          //))
          <MarvelGrid category={ categories}/>
      } 
    
    </>
  )
}



