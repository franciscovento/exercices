import '../DetailsPage/detailsPage.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
const DetailsPage = () => {
  
const [pokemonDetails, setPokemonDetails] = useState(undefined);
const {pokemon} = useParams()

useEffect(()=>{
  const getInfo = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  setPokemonDetails(res.data);
  console.log(res.data)
};
getInfo();
},[pokemon])



  return (
    <div>
     {pokemonDetails? 
     <div>
       { pokemonDetails.name} 
       <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="" /> 
       <div>
         <h3>Habilitys</h3>
         {pokemonDetails.abilities.map((x, index) =>  <ul key={index}>
           
           <li>{x.ability.name}</li>
         </ul> )}
       </div>
     </div> : 
     
     
     'Parece que el pokemón que buscas no existe :( ...'}
    
    </div>
  )
}

export default DetailsPage
