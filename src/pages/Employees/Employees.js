import EmployeeForm from "./EmployeeForm";
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import { useState } from "react";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  }
}));

const headCells = [
  {id: 'fullName', label: 'Employee Name'},
  {id: 'email', label: 'Email Address'},
  {id: 'mobile', label: 'Mobile Number'},
  {id: 'department', label: 'Department', disableSorting: true}
]

function Employees() {

  const classes = useStyles();

  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFunction, setFilterFunction] = useState({fn:items => {return items;}});

  const { 
    TableContainer,
    TableHead,
    TablePagination,
    recordsAfterPagingAndSorting, 
  } = useTable(records, headCells, filterFunction);

  const handleSearch = event => {
    let target = event.target;
    setFilterFunction({
      fn: items => {
        if(target.value === '') {
          return items;
        } else {
          return items.filter(item => 
            item.fullName.toLowerCase().includes(target.value))
        }
      }
    })
  }

  return (
    <>
      <PageHeader
        title='New Employee'
        subtitle='Form design with validation'
        icon={<PeopleOutlineIcon
        fontSize='large'/>}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment:(
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text='Add New'
            variant='outlined'
            startIcon={<AddIcon/>}
            className={classes.newButton}
          />
        </Toolbar>
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
