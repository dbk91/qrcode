import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  submitButton: {
    [theme.breakpoints.up('sm')]: {
      float: 'right',
    },
  },
}))
