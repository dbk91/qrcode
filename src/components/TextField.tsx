import React from 'react'
import { useField, useFormikContext } from 'formik'
import MuiTextField, {
  OutlinedTextFieldProps as MuiTextFieldProps,
} from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

interface TextFieldProps extends MuiTextFieldProps {
  id: string
  name: string
  showPassword?: boolean
  togglePassword?: () => void
  children?: any
}

const TextField = ({
  id,
  children,
  showPassword: showPasswordProp,
  togglePassword: togglePasswordProp,
  disabled,
  helperText,
  ...props
}: Omit<TextFieldProps, 'variant'>) => {
  const [field, meta] = useField<string>(props.name)
  const form = useFormikContext()
  const [localShowPassword, setLocalShowPassword] = React.useState<boolean>(false)
  const togglePassword = React.useCallback(() => setLocalShowPassword(isVisible => !isVisible), [])

  const isDisabled: boolean = disabled || form.isSubmitting
  const isTouched = meta.touched
  const fieldError = meta.error
  const showPassword = !isDisabled && (showPasswordProp ?? localShowPassword)

  const type = React.useMemo(() => {
    if (props.type === 'password') {
      if (!showPassword || isDisabled) {
        return 'password'
      } else {
        return 'text'
      }
    }

    return props.type || 'text'
  }, [props.type, showPassword, isDisabled])
  const [initialFieldType] = React.useState(type)
  const showPasswordAdornment = initialFieldType === 'password' || type === 'password'

  return (
    <MuiTextField
      {...field}
      variant="outlined"
      margin="normal"
      size="small"
      error={isTouched && Boolean(fieldError)}
      helperText={helperText ?? (isTouched && fieldError)}
      disabled={isDisabled}
      {...props}
      type={type}
      InputProps={{
        id,
        endAdornment: showPasswordAdornment && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle-visibility"
              onClick={togglePasswordProp ?? togglePassword}
              disabled={isDisabled}
            >
              {showPassword || isDisabled ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
      InputLabelProps={{
        htmlFor: id,
        ...props.InputLabelProps,
      }}
      SelectProps={
        props.select
          ? {
              native: true,
              ...props.SelectProps,
            }
          : undefined
      }
    >
      {children}
    </MuiTextField>
  )
}

TextField.defaultProps = {
  InputLabelProps: {},
  InputProps: {},
  SelectProps: {},
  children: null,
  disabled: false,
  select: false,
}

export default React.memo(TextField)
