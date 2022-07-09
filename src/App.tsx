import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailedCard from "./components/DetailedCard"
import Home from "./layouts/Home"
import "./index.scss"

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DetailedCard/:id/:destination/:title" element={<DetailedCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
