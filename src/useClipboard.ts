import React from 'react'
import Clipboard from 'clipboard'

const useClipboard = (text?: string) => {
  const [source, setSource] = React.useState(null)
  const [action, setAction] = React.useState(null)
  const isSupported = React.useMemo(() => {
    if (typeof document !== 'undefined') {
      return Clipboard.isSupported()
    }

    // Optimistically assume it's supported on server render
    return true
  }, [])
  console.log(text)

  React.useEffect(
    () => {
      if (isSupported && source !== null && action !== null) {
        const clipboard = new Clipboard(action, {
          target: () => source,
          text: text ? () => text : undefined,
        })

        return () => void clipboard.destroy()
      }
    },
    [source, action, text],
  )

  return [setSource, setAction, isSupported]
}

export default useClipboard
