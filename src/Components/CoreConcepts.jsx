
export default function Coreconcepts({image,title,description}){  //{we can use destructuring and write less code like this}
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}