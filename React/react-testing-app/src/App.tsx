import { Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import EmpForm from "./components/EmpForm"

function App() {

  return (
    <>
      <Counter/>  
      <Routes>
         <Route path="empForm" element={<EmpForm/>}/>
      </Routes>
    </>
  )
}

export default App
