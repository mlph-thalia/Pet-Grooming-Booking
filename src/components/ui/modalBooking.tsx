import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

interface Service {
  title: string
  description: string
  price: string
}

interface ModalBookingProps {
  open: boolean
  onClose: () => void
  selectedService: number | null
  services: Service[]
  onBookConfirm: () => void
}

const ModalBooking: React.FC<ModalBookingProps> = ({ open, onClose, selectedService, services, onBookConfirm }) => {
  const service = selectedService !== null ? services[selectedService] : null

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{service?.title || 'Service Booking'}</DialogTitle>
      <DialogContent>
        <Typography>{service?.description}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Price: {service?.price}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={onBookConfirm}>
          Confirm Booking
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalBooking
