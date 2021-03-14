import EmployeeForm from "./EmployeeForm";
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}));

const headCells = [
  {id: 'fullName', label: 'Employee Name'},
  {id: 'email', label: 'Email Address'},
  {id: 'mobile', label: 'Mobile Number'},
  {id: 'department', label: 'Department'}
]

function Employees() {

  const classes = useStyles();

  const [records, setRecords] = useState(employeeService.getAllEmployees());

  const { TableContainer, TableHead, TablePagination, recordsAfterPagingAndSorting } = useTable(records, headCells);

  return (
    <>
      <PageHeader
        title='New Employee'
        subtitle='Form design with validation'
        icon={<PeopleOutlineIcon
        fontSize='large'/>}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TableContainer>
        <TableHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map(item => 
              (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </TableContainer>
        <TablePagination />
      </Paper>

    </>
  )
}

export default Employees
