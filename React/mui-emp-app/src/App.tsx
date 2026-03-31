import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import ProtectedRoute from "./routes/ProtectedRoute"
import MainLayout from "./layouts/MainLayout"
import EmployeeLayout from "./layouts/EmployeeLayout"
import EmployeeList from "./pages/employee/EmployeeList"
import EmployeeForm from "./pages/employee/EmployeeForm"
import EmployeeDetails from "./pages/employee/EmployeeDetails"
import AdminLayout from "./layouts/AdminLayout"
import AdminDashBoard from "./pages/admin/AdminDashboard"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
    <AuthProvider >
  <BrowserRouter>
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}``
      <Route element={<ProtectedRoute />}>

        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Employee Module */}
          <Route path="employee" element={<EmployeeLayout />}>

            <Route index element={<EmployeeList />} />
            <Route path="add" element={<EmployeeForm />} />
            <Route path="edit/:id" element={<EmployeeForm />} />
            <Route path=":id" element={<EmployeeDetails />} />
          </Route>

        </Route>

        {/* Admin Layout (separate root) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashBoard />} />
        </Route>

      </Route>

    </Routes>
  </BrowserRouter>
</AuthProvider>
    </>
  )
}

export default App
