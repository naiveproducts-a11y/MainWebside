import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/settings'
import { ThemeProvider, createTheme, StyledEngineProvider, CssBaseline } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans Thai", "Inter", "system-ui", sans-serif',
  },
  palette: {
    primary: {
      main: '#06b6d4', // cyan-500
      light: '#22d3ee',
      dark: '#0891b2',
    },
    secondary: {
      main: '#d946ef', // fuchsia-500
      light: '#e879f9',
      dark: '#c026d3',
    },
    background: {
      default: '#f8fafc',
    }
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }
      }
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
