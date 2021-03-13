import { useState } from 'react';
import './App.css';
import SideMenu from './SideMenu';
import Header from './Header';

import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #333, red)',
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: 'white',
//     padding: '5px 30px'
//   }
// });

// const theme = createMuiTheme({
//   typography: {
//     h2: {
//       fontSize: 36,
//       marginBottom: 15,
//     }
//   },
//   palette: {
//     primary: {
//       main: green[400],
//     },
//     secondary: {
//       main: orange[400]
//     }
//   }
// });

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test Styled Button</Button>
// }

// const CheckboxExample = () => {
//   const [checked, setChecked] = useState(true);
//   return (
//     <FormControlLabel 
//       control={
//         <Checkbox
//           checked={checked}
//           icon={<SaveIcon />}
//           checkedIcon={<SaveIcon />}
//           onChange={(e) => setChecked(e.target.checked)}
//           inputProps={{
//             'aria-label': 'secondary checkbox'
//           }}
//         />}
//         label='Testing Checkbox'
//     />
//   )
// }

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width:'100%'
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>

    // <ThemeProvider theme={theme}>

    //   <Container maxWidth="sm">

    //     <div className="App">
    //       <AppBar color="secondary">
    //         <Toolbar>
    //           <IconButton>
    //             <MenuIcon />
    //           </IconButton>
    //           <Typography variant="h6">
    //             MUI TEST THEME
    //           </Typography>
    //           <Button>
    //             Login
    //           </Button>
    //         </Toolbar>
    //       </AppBar>

    //       <Typography variant="h2" component="div">
    //         Test Test Test
    //       </Typography>

    //       <Typography variant="subtitle1">
    //         Test Test Test
    //       </Typography>

    //       <ButtonStyled />

    //       <Grid container spacing={2} justify="center">
    //         <Grid item xs={3} sm={6}>
    //           <Paper style={{
    //             height: 75, width: '100%' }} />
    //         </Grid>
    //         <Grid item xs={3} sm={6}>
    //           <Paper style={{
    //             height: 75, width: '100%' }} />
    //         </Grid>
    //         <Grid item xs={3} sm={6}>
    //           <Paper style={{
    //             height: 75, width: '100%' }} />
    //         </Grid>
    //       </Grid>

    //       <TextField 
    //         variant="filled"
    //         color="secondary"
    //         type="email"
    //         label="Your Email"
    //         placeholder="testing@test.com"
    //       />
    //       <CheckboxExample />
    //       <ButtonGroup variant="contained">
    //         <Button
    //           startIcon={<SaveIcon />}
    //           color="primary">
    //           Save
    //         </Button>
    //         <Button
    //           startIcon={<DeleteIcon />}
    //           color="secondary">
    //           Delete
    //         </Button>        
    //       </ButtonGroup>
    //     </div>
    //   </Container>
    // </ThemeProvider>
  );
}

export default App;
