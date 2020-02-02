import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import makeStyles from '@material-ui/core/styles/makeStyles'

import QRCodeCanvas from './QRCodeCanvas'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  divider: {
    alignSelf: 'stretch',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: theme.spacing(4, 0, 1, 0),
    },
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      margin: theme.spacing(0, 2),
    },
  },
}))

interface PageLayoutProps {
  render: any
}

const PageLayout = ({ render, ...otherProps }: PageLayoutProps) => {
  const [qrCodeText, setQrCodeText] = React.useState<string>('')
  const classes = useStyles(otherProps)

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm>
            {render({ setQrCodeText })}
          </Grid>
          <Hidden smUp>
            <Divider variant="middle" className={classes.divider} />
          </Hidden>
          <Hidden xsDown>
            <Divider orientation="vertical" className={classes.divider} />
          </Hidden>
          <Grid item xs={12} sm>
            <QRCodeCanvas text={qrCodeText} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PageLayout
