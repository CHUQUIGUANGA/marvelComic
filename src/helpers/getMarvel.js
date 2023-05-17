//funcion para conectar a API Y recopilar información 

export const getMarvel = async(category)=>{

    const url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171&limit=5&title=${category}`;
    const resp = await fetch(url);
 
   const {data} = await resp.json(); 

   let result= data.results;
   
  //creamos la estructura de los datos,cuidado con lo que asignas 
   const imgs = result.map(img=> ({

    id: img.id,
    title: img.title,
    image: img.thumbnail.path +'.'+img.thumbnail.extension

  }));

console.log(imgs)
  return imgs
   
}