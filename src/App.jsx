import './App.css'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail'
import Horror from './Components/Horror/Horror'
function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
