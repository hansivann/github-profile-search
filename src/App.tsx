import Card from "./components/Card"
import Search from "./components/Search"


// TO-DO: 

function App() {

  return (
    <>
    <div className=' bg-slate-900 flex items-center justify-center h-screen'>
        <div className=' flex-col w-96 h-96 bg-orange-400 bg-opacity-50'>
        <Search />
        <Card />
      </div>
    </div> 

    </>
  )
}

export default App
