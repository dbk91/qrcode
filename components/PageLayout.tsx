import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import makeStyles from '@material-ui/core/styles/makeStyles'

import QRCodeCanvas from './QRCodeCanvas'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  divider: {
    alignSelf: 'stretch',
    height: 'auto',
    margin: theme.spacing(0, 2),
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
        <Grid container alignItems="center">
          <Grid item xs>
            {render({ setQrCodeText })}
          </Grid>
          <Divider orientation="vertical" className={classes.divider} />
          <Grid item xs>
            <QRCodeCanvas text={qrCodeText} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PageLayout
