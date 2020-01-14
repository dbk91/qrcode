import React from 'react'
import { useField } from 'formik'
import MuiButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  selected: {
    color: 'tomato',
  },
})

const ButtonGroup = ({ name, options, ...otherProps }) => {
  const [field, meta, helpers] = useField<string>(name)
  const isSelected = v => v === field.value
  const classes = useStyles(otherProps)

  return (
    <MuiButtonGroup size="small" {...otherProps}>
      {options.map(option => (
        <Button
          key={option.value}
          onClick={() => void helpers.setValue(option.value)}
          color={isSelected(option.value) ? 'primary' : 'default'}
          variant={isSelected(option.value) ? 'contained' : 'outlined'}
        >
          {option.label}
        </Button>
      ))}
    </MuiButtonGroup>
  )
}

export default ButtonGroup