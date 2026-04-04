import { Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import EmpForm from "./components/EmpForm"
import { SuccessPage } from "./components/SuccessPage"

function App() {

  return (
    <>
      <Routes>
         <Route path="empForm" element={<EmpForm/>}/>
         <Route path="success" element={<SuccessPage/>}/>

      </Routes>
    </>
  )
}

export default App
