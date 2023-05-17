import { useState } from "react";

 

export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValu] = useState('');
    
    const onInputChange=({target})=>{
        //controlamos los datos del input
        setInputValu(target.value);
    }

   const onSubmit = (event)=>{
    //para evitar el refresh de la pagina 
    event.preventDefault();
    //controlamos que no ingrese el enter o vacio hasta que sea mayor a dos caracteres
    if (InputValue.trim().length <= 1) return; 

    
    //setCategories(categories =>[InputValue, ...categories]);

    //controlamos para que borre despues del enter
    setInputValu('');
    onNewCategory(InputValue);
   }

  return (
 //controlar el enter mediante el submit
    <form onSubmit={ onSubmit}>
         <input type="text"
          placeholder="Busca imgs"
          value={InputValue}
          onChange={onInputChange}

          />
    </form>


    
  )
}
