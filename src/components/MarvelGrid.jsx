import { MarvelItem } from "./MarvelItem";
import { useFetchMarvel } from "../hooks/useFetchMarvel";


//componente 
export const MarvelGrid = ({category}) => {

const {Images, isLoading}=useFetchMarvel(category);



return (  
   <>
       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1">      
          <h3 className="col text-center mt-4 mb-4 md-5"> {category}         </h3>
          {
              isLoading && (<h2 >Cargando...</h2>)
          }
       </div>    
       <div className="card-grid  row-cols-1 row-cols-sm-2 row-cols-md-5 ">
              {
                     Images.map((img)=>(
                     <MarvelItem 
                            key={img.id}
                            { ...img}//propagamos los datos al componente
                     />                            
                     ))                
              }
       </div>
       
   </>
  )
}
