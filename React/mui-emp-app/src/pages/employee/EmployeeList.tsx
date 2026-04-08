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
  IconButton,
  TextField
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { getAllEmps } from "../../services/EmployeeService";
import { useEmployees } from "../../hooks/useEmployees";
import ConfirmDialog from "../../components/common/ConfirmDialog";

type Department = "HR" | "IT" | "Finance";
type Gender = "Male" | "Female" | "Other";
export type Employee = {
  id: number;
  name: string;
  age: number;
  email: string;
  dept: Department;
  gender: Gender;
};

function EmployeeList() {
  const navigate = useNavigate();
//const [emps,setEmps]=useState<Employee[]>([])
const [search,setSearch]=useState<string>("");
//Dialog state
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
//const [filteredEmps,setFilteredEmps]=useState<Employee[]>([])
/*useEffect( ()=>{
       getAllEmps().then( emps=>setEmps(emps));
},[] );
*/
let {emps,removeEmp}=useEmployees();


  const handleDelete = (id: number) => {
    console.log("Delete employee:", id);
 //   removeEmp(id);
  setSelectedId(id);
    setOpen(true);


    // later → API call + confirm dialog
    //const prev = emps;
    // update UI instantly
    //OPtimistic UI update like FB, instagram like
    //setEmps(emps.filter(emp => emp.id !== id));
    //then remove from BackEND  .....
    
  };

  
  // confirm delete
  const handleConfirm = async () => {
    if (selectedId !== null) {
       removeEmp(selectedId);
    }
    setOpen(false);
    setSelectedId(null);
  };

  // cancel
  const handleCancel = () => {
    setOpen(false);
    setSelectedId(null);
  };

const filteredEmps=
emps.filter(e=>e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Box p={2}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
          <TextField
    size="small"
    label="Search"
    
    sx={{ width: 250 }}  onChange={(e)=>setSearch(e.target.value)}
  />
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
            {filteredEmps.map((emp) => (
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
       {/* Confirm Dialog */}
      <ConfirmDialog
        open={open}
        title="Delete Employee"
        message="Are you sure you want to delete this employee?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Box>
  );
}

export default EmployeeList;