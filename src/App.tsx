import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./layouts/Home"
import Cards from "./layouts/Cards"
import "./index.scss"

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
       {/*    <Route path="/test/:param" element={<Component />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
