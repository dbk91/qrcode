import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const ErrorPage = ({ statusCode }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3">
        <Box textAlign="center">{statusCode}</Box>
        <Box textAlign="center" color="text.secondary">
          {statusCode === 404 ? 'Page Not Found' : ''}
          {statusCode === 500 ? 'Internal Server Error' : ''}
        </Box>
      </Typography>
    </Container>
  )
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
