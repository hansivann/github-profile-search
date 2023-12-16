

function Search() {
  return (
    <>
      <form className='flex flex-col items-center justify-center mt-5'>
          <input
          type="text"
          id='search'
          placeholder="GitHub User"
          ></input>
            <div>Search goes here</div>
      </form>
    </>
  )
}

export default Search