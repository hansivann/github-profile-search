import Card from "./components/Card"
import Search from "./components/Search"


// TO-DO: 
// make repos into links
// make search work
//hide api
// fix styling - responsive 

function App() {

  return (
    <>
    <div className='  bg-slate-900 flex items-center justify-center h-screen'>
        <div className=' flex-col w-8/12 max-h-full bg-orange-400 bg-opacity-50 p-4 '>
        <Search />
        <Card/>
      </div>
    </div> 

    </>
  )
}

export default App
