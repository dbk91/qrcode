import React from 'react'
import { useField } from 'formik'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'

const useStyles = makeStyles(() => ({
  buttonGroup: {
    width: '100%',
  },
  button: {
    flex: '1 1 0',
  },
}))

const ButtonGroup = ({ name, options, ...otherProps }) => {
  const [field, meta, helpers] = useField<string>(name)
  const classes = useStyles()

  const handleChange = React.useCallback((e, value) => {
    if (value !== null) {
      helpers.setValue(value)
    }
  }, [])

  return (
    <ToggleButtonGroup
      value={field.value}
      exclusive
      size="small"
      onChange={handleChange}
      classes={{
        root: classes.buttonGroup,
      }}
      {...otherProps}
    >
      {options.map(option => (
        <ToggleButton
          key={option.value}
          value={option.value}
          classes={{
            root: classes.button,
          }}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default ButtonGroup
