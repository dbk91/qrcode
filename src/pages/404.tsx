import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function Custom404() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3">
        <Box textAlign="center">404</Box>
        <Box textAlign="center" color="text.secondary">
          Page Not Found
        </Box>
      </Typography>
    </Container>
  )
}

export default Custom404
