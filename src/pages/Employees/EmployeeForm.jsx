import { Grid } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'},
]

const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,

}

function EmployeeForm() {

  const validate = (fieldValues = values) => {

    let temp = {...errors};

    if('fullName' in fieldValues) {
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    }
    if('email' in fieldValues) {
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? '' : 'Enter a valid email address.';
    }
    if('mobile' in fieldValues) {
      temp.mobile = fieldValues.mobile.length > 9 ? '' : 'Minimum of 10 numbers required.';
    }
    if('departmentId' in fieldValues) {
      temp.departmentId = fieldValues.departmentId.length ? '' : 'This field is required.'
    }

    setErrors({
      ...temp
    })

    if(fieldValues === values) {
      return Object.values(temp).every(x => x === '');
    }

  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialValues, true, validate);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input 
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name="mobile"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker 
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              type="submit"
              text="Submit"
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
            /> 
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
