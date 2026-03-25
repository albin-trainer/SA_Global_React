import { Route, Routes } from 'react-router-dom'
import './App.css'
//import EmployeeList from './pages/EmployeeList'
//import EmployeeForm from './pages/EmployeeForm'
//import AdminDashboard from './pages/AdminDashboard'
import MainLayout from './layouts/MainLayout'
import EmployeeLayout from './layouts/EmployeeLayout'
import AdminLayout from './layouts/AdminLayout'
import { lazy } from 'react'
const EmployeeList =lazy( ()=> import("./pages/EmployeeList") );
const EmployeeForm =lazy( ()=> import("./pages/EmployeeForm") );
const AdminDashboard =lazy( ()=> import("./pages/AdminDashboard") );
function App() {
  return (
    <>
    <Routes>
     {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        {/* Nested Employee Layout */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeList />} />
          <Route path="empForm" element={<EmployeeForm />} />
       </Route>
      </Route>
      {/*  Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

    </Routes>
    </>
  )
}

export default App
