import '../cardPokemon/cardPokemon.scss'
import {Link} from 'react-router-dom'


const CardPokemon = ({id, name, image, type, miFunc}) => {

    let styles = `cardPokemon ${type}`
 

  return (
    <Link to={name} onClick={()=> {miFunc(name)}}>
    <div className='containerCard' >
        <div className={styles}>
        <p>#{id}</p>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{type}</p>
    </div>
    </div>
    </Link>
  )
}

export default CardPokemon
