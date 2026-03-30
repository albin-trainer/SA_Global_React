import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

type Department = "HR" | "IT" | "Finance";
type Gender = "Male" | "Female" | "Other";

type Employee = {
  id: number;
  name: string;
  age: number;
  email: string;
  dept: Department;
  gender: Gender;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "Sanjay",
    age: 28,
    email: "Sanjay@gmail.com",
    dept: "IT",
    gender: "Male"
  },
  {
    id: 2,
    name: "Mary Jane",
    age: 32,
    email: "mary@mail.com",
    dept: "HR",
    gender: "Female"
  },
  {
    id: 3,
    name: "Raj",
    age: 30,
    email: "Raj@gmail.com",
    dept: "Finance",
    gender: "Other"
  }
];

function EmployeeList() {
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    console.log("Delete employee:", id);
    // later → API call + confirm dialog
  };

  return (
    <Box p={2}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Employees</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/employee/add")}
        >
          Add Employee
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.age}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>{emp.dept}</TableCell>
                <TableCell>{emp.gender}</TableCell>

                <TableCell align="center">
                  {/* View */}
                  <IconButton
                    onClick={() => navigate(`/employee/${emp.id}`)}
                  >
                    <VisibilityIcon />
                  </IconButton>

                  {/* Edit */}
                  <IconButton
                    onClick={() => navigate(`/employee/edit/${emp.id}`)}
                  >
                    <EditIcon />
                  </IconButton>

                  {/* Delete */}
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(emp.id)}
                  >
                    <DeleteIcon />
                    <DeleteOutlineOutlinedIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EmployeeList;