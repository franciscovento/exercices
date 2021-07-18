import './App.css'
import { useEffect, useState } from 'react'
import { read } from './services/read'
import QuoteItem from './components/QuoteItem'
import { useForm } from 'react-hook-form'
import CreateQuote from './components/CreateQuote'
import { getOptions } from './services/getOptions'
import { create } from './services/create'
import { deleteQuote } from './services/delete'


function App () {
  const [quotes, setQuotes] = useState([])
  const [options, setOptions] = useState([])
  const { register, handleSubmit, reset } = useForm()

  const onCreateQuote = values => {
    console.log(values) 
    const miFunc = async () => {
      const res = await create(values)

      setQuotes(prevState => [res.data, ...prevState])
      reset()
    }

    miFunc()
  }

  const onDeleteQuote = id => {
    console.log(id)

    const miFunc = async () => {
      const res = await deleteQuote(id)
      console.log(res)
      setQuotes(prevState => prevState.filter(value => value._id !== id))
    }

    miFunc()
  }

  useEffect(() => {
    const miFunc = async () => {
      const data = await read()

      setQuotes(data.quotes)
    }

    miFunc()
  }, [])

  useEffect(() => {
    const miFunc = async () => {
      const data = await getOptions()
      setOptions(data.classOptions)
    }

    miFunc()
  }, [])

  const list = quotes.map(value => (
    <QuoteItem
      text={value.quote}
      clase={value.class}
      key={value._id}
      id={value._id}
      handleDelete={onDeleteQuote}
    />
  ))

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Agregar nueva cita:</h3>
        <CreateQuote
          handleSubmit={handleSubmit}
          register={register}
          handleCreateQuote={onCreateQuote}
          options={options}
        />
        {list}
      </header>
    </div>
  )
}

export default App