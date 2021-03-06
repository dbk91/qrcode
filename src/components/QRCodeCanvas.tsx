import React from 'react'
import QRCode from 'qrcode'
import { saveAs } from 'file-saver'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import Box from '@material-ui/core/Box'
import PrintIcon from '@material-ui/icons/Print'
import ImageIcon from '@material-ui/icons/Image'
import SaveIcon from '@material-ui/icons/Save'
import TextFormat from '@material-ui/icons/TextFormat'

import useClipboard from 'useClipboard'

interface QRCodeCanvasProps {
  text: string
}

function QRCodeCanvas({ text }: QRCodeCanvasProps) {
  const canvasEl = React.useRef(null)
  const isDisabled = text === ''
  const [setSource, setAction, clipboardIsSupported] = useClipboard(text)
  const downloadFile = React.useCallback(() => {
    QRCode.toDataURL(text, { type: 'image/png' }, function(error, url) {
      if (error) throw error

      saveAs(url, 'qr-code.png')
    })
  }, [text])
  const printPage = React.useCallback(() => void window.print(), [])

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
      <Grid item xs={12}>
        <Box textAlign="center">
          <canvas id="qrcode-canvas" ref={canvasEl} />
          <span ref={setSource} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Tooltip title={isDisabled ? '' : 'Print QR Code'} onClick={printPage}>
              <Fab size="small" disabled={isDisabled}>
                <PrintIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={isDisabled ? '' : 'Export QR Code as Image'}>
              <Fab size="small" disabled={isDisabled} onClick={downloadFile}>
                <ImageIcon />
              </Fab>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={isDisabled ? '' : 'Save QR Code to Browser'}>
              <Fab size="small" disabled={isDisabled}>
                <SaveIcon />
              </Fab>
            </Tooltip>
          </Grid>
          {clipboardIsSupported && (
            <Grid item>
              <Tooltip title={isDisabled ? '' : 'Copy QR Code Plaintext'} innerRef={setAction}>
                <Fab size="small" disabled={isDisabled}>
                  <TextFormat />
                </Fab>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default QRCodeCanvas
