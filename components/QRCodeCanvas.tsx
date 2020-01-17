import React from 'react'
import QRCode from 'qrcode'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'
import PrintIcon from '@material-ui/icons/Print'
import ImageIcon from '@material-ui/icons/Image'
import SaveIcon from '@material-ui/icons/Save'
import TextFormat from '@material-ui/icons/TextFormat'

interface QRCodeCanvasProps {
  text: string
}

function QRCodeCanvas({ text }: QRCodeCanvasProps) {
  const canvasEl = React.useRef(null)
  const isDisabled = text === ''

  React.useEffect(() => {
    if (canvasEl.current === null) {
      throw new Error('Canvas element does not exist.')
    }

    if (text) {
      QRCode.toCanvas(canvasEl.current, text, function(error) {
        if (error) throw error
      })
    }
  }, [text])

  return (
    <Grid container>
      <Grid item xs={6}>
        <canvas ref={canvasEl} />
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={6}>
            <Tooltip title={isDisabled ? '' : 'Print QR Code'}>
              <Fab size="small" disabled={isDisabled}>
                <PrintIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title={isDisabled ? '' : 'Export QR Code as Image'}>
              <Fab size="small" disabled={isDisabled}>
                <ImageIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title={isDisabled ? '' : 'Save QR Code to Browser'}>
              <Fab size="small" disabled={isDisabled}>
                <SaveIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title={isDisabled ? '' : 'Copy QR Code Plaintext'}>
              <Fab size="small" disabled={isDisabled}>
                <TextFormat />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default QRCodeCanvas
