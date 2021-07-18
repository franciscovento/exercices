  
const QuoteItem = ({ text, clase, id, handleDelete }) => {
    return (
      <div className='QuoteItemContainer'>
        {text} - {clase} 
        <button
          onClick={() => {
            handleDelete(id)
          }}
        >
          delete
        </button>
        
        
      </div>
    )
  }
  
  export default QuoteItem