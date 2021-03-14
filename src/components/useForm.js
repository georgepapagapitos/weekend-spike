import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

function useForm(initialValues) {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))

function Form(props) {

  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  )
}


export { useForm, Form };
