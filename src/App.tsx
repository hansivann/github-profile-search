import Card from "./components/Card"
import Search from "./components/Search"


// TO-DO: 

function App() {

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center w-96 h-96 bg-orange-400 bg-opacity-50'>
        <Search />
        <Card />
      </div>
    </div> 

    </>
  )
}

export default App
