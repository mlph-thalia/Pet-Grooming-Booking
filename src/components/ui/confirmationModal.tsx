import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, Box } from '@mui/material'

interface ConfirmationModalProps {
  open: boolean
  onClose: () => void
  serviceTitle: string
  servicePrice: string
  onConfirm: (bookingData: { name: string; address: string; email: string; phone: string }) => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  serviceTitle,
  servicePrice,
  onConfirm,
}) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleConfirm = () => {
    onConfirm({ name, address, email, phone })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Your Booking</DialogTitle>
      <DialogContent>
        <Typography mb={2}>
          Booking: <strong>{serviceTitle}</strong> for <strong>{servicePrice}</strong>
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth />
          <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} required fullWidth />
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required fullWidth />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleConfirm}
          disabled={!name || !address || !email || !phone}
        >
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationModal
