import { useEffect, useState } from "react";
import { getMarvel } from "../helpers/getMarvel";



export const useFetchMarvel = (category) => {

 //creamos un componente asyncrono para despues controlarlo con useEffect
 //recordar que en use efect no se puede usar el asyncrono
const [Images, setImage] = useState([]);  
const [IsLoading, setIsLoading] = useState(true);

const getImages = async() =>{
       const newImages = await getMarvel(category);
       setImage ( newImages);
       setIsLoading(false);
}      


useEffect (()=>{//controlamos de que el componente se ejecute una sola vez

    getImages();

},[ category ]);//los corchetes son las dependencias y estar vacias,solo ejecutan una sola vez


  return {
    Images: Images,//si se repiten las variables puedes ser solo una 
    isLoading: IsLoading
  }
}
