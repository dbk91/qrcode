import React from 'react'
import { useField } from 'formik'
import MuiCheckbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface CheckboxProps {
  id: string
  name: string
  label: string
}

const Checkbox = (props: CheckboxProps) => {
  const [field, meta] = useField<boolean>(props.name)

  return (
    <FormGroup row>
      <FormControlLabel
        {...props}
        control={
          <MuiCheckbox
            {...field}
            defaultChecked={field.value}
            color="primary"
            inputProps={{ 'aria-label': props.id }}
          />
        }
      />
    </FormGroup>
  )
}

export default Checkbox
