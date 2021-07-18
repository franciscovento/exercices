const CreateQuote = ({
    handleSubmit,
    register,
    handleCreateQuote,
    options
  }) => {
    const list = options.map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))
  
    return (
        <div className='formContainer'>
      <form onSubmit={handleSubmit(handleCreateQuote)}>
        <div>
          <label>
            Cita
            <input type='text' {...register('quote', { required: true })} />
          </label>
        </div>
  
        <div>
          <label>
            Clase
            <select {...register('class', { required: true })}>
              <option value=''>Selecciona una opción</option>
              {list}
            </select>
          </label>
        </div>
  
        <button>Submit</button>
      </form>
      </div>
    )
  }
  
  export default CreateQuote