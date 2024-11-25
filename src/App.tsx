import FyloMenu from "./components/FyloMenu"
import FyloStorage from "./components/FyloStorage"

function App() {

  return (
    <>
      <div className='row align-items-end gap-4 gap-md-3 gap-lg-4 mx-3'>
        <FyloMenu />
        <FyloStorage />
      </div>
    </>
  )
}

export default App