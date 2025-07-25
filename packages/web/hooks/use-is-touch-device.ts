'use client'

import * as React from 'react'

export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = React.useState(false)

  React.useEffect(() => {
    function onResize() {
      // Detect touch device only in browser environment
      if (typeof window === 'undefined') {
        setIsTouchDevice(false)
        return
      }
      
      setIsTouchDevice(
        'ontouchstart' in window ||
          (window.navigator && window.navigator.maxTouchPoints > 0)
      )
    }

    window.addEventListener('resize', onResize)
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return isTouchDevice
}
