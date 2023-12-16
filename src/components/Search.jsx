

function Search() {
  return (
    <>
      <form className='flex flex-col items-center justify-center mt-5 '>
          <input
          type="text"
          id='search'
          placeholder="GitHub User"
          className="text-center"
          ></input>
      </form>
    </>
  )
}

export default Search