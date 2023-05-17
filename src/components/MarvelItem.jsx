

export const MarvelItem = ({id,title,image}) => {
 
  return (
    <div className="card col">
      <img src={image} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
