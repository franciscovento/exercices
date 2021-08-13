import '../formSearcher/formSearcher.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const FormSearcher = () => {

  const [valueTypes, setValueTypes] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const getValueInfo = async () => {
      let data = await axios.get('https://pokeapi.co/api/v2/type')
      console.log(data.data.results)
      setValueTypes(data.data.results);
    }
    getValueInfo();
  }, [])

  const list = valueTypes.map((x, index) => <option key={index} value={x.name}>{x.name}</option>)

  const getQuerySearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <form className='form'>
      <div className='inputButtonContainer'>
        <input type="text" placeholder='Escribe el nombre del pokemón' onChange={getQuerySearch} />
        <Link to={`details/${search}`}>Buscar</Link>
      </div>
      <select name="types" id="select">
      <option value="">All</option>
      {list}
    </select>
    </form>
  )
}

export default FormSearcher
