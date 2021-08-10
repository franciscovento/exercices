import '../pagination/pagination.scss'
const Pagination = ({goToPrevPage, goToNextPage}) => {
  return (
    <div className='paginationContainer'>
     { goToPrevPage && <button onClick={goToPrevPage}>Prev</button>}
     { goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}

export default Pagination
