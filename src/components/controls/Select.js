import { FormControl, InputLabel, MenuItem, Select as MuiSelect, FormHelperText } from "@material-ui/core";

function Select(props) {

const { name, label, value, error=null, onChange, options } = props;

  return (
    <FormControl variant="outlined" {...(error && {error:true})}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}>
          <MenuItem value="">None</MenuItem>
          {options.map(item => {
            return (
              <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            )
          })}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

export default Select
