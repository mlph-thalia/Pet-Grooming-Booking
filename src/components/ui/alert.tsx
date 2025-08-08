import React from 'react'
import { Snackbar, Alert } from '@mui/material'

interface CustomSnackbarProps {
  open: boolean
  severity: 'success' | 'error' | 'info' | 'warning'
  message: string
  onClose: () => void
  autoHideDuration?: number
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  severity,
  message,
  onClose,
  autoHideDuration = 4000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
