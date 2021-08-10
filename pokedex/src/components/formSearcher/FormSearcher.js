import '../formSearcher/formSearcher.scss'

const FormSearcher = () => {
  return (
    <form className='form'>
    <div className='inputButtonContainer'>
      <input type="text" placeholder='Escribe el nombre del pokemón' />
      <button type='submit'>Buscar</button>
    </div>
    <select name="types" id="select">
      <option value="Grass">All</option>
      <option value="Grass">Grass</option>
      <option value="Grass">Grass</option>
      <option value="Grass">Grass</option>
      <option value="Grass">Grass</option>
      <option value="Grass">Grass</option>
    </select>
  </form>
  )
}

export default FormSearcher
