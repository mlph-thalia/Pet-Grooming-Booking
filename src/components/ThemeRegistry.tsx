'use client'
import { ThemeProvider, createTheme } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import React from 'react'

const createEmotionCache = () => {
  let insertionPoint

  if (typeof document !== 'undefined') {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]')
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({ key: 'mui-style', insertionPoint })
}

const clientSideEmotionCache = createEmotionCache()

const theme = createTheme({
  palette: {
    primary: {
      main: '#8DC71E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C2C2C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    success: {
      main: '#8DC71E',
    },
    error: {
      main: '#FF4444',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Yu Gothic, YuGothic, Hiragino Kaku Gothic ProN, Meiryo, sans-serif',
    fontWeightBold: 700,
  },
  shape: { borderRadius: 16 },
})

interface ThemeRegistryProps {
  children: React.ReactNode
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  )
}
