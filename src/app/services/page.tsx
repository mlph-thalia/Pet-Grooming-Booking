'use client'

import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import ServiceCard from '@/components/ui/serviceCard'
import ModalBooking from '@/components/ui/modalBooking'
import ConfirmationModal from '@/components/ui/confirmationModal'
import CustomSnackbar from '@/components/ui/alert'

type Service = {
  _id: string
  title: string
  description: string
  price: string
  buttonDetails: string
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [bookingOpen, setBookingOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success')

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/getAllServices')
        const data: Service[] = await res.json()
        setServices(data)
      } catch (error) {
        console.error('Failed to fetch services:', error)
      }
    }
    fetchServices()
  }, [])

  const handleOpenBooking = (index: number) => {
    setSelectedService(index)
    setBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setBookingOpen(false)
    setSelectedService(null)
  }

  const handleConfirmBooking = () => {
    setBookingOpen(false)
    setConfirmationOpen(true)
  }

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false)
    setSelectedService(null)
  }

  const handleFinalConfirm = async (customerData: { name: string; address: string; email: string; phone: string }) => {
    if (selectedService === null) return

    const service = services[selectedService]

    try {
      const res = await fetch('/api/bookServices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceTitle: service.title,
          servicePrice: service.price,
          ...customerData,
        }),
      })

      if (!res.ok) throw new Error('Failed to save booking')

      setSnackbarMessage('Booking confirmed! Thank you.')
      setSnackbarSeverity('success')
      setSnackbarOpen(true)

      setConfirmationOpen(false)
      setSelectedService(null)
    } catch (error) {
      setSnackbarMessage('Something went wrong. Please try again.')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
      console.error(error)
    }
  }

  return (
    <Container sx={{ py: 8 }}>
      <h1 className="text-4xl font-bold text-primary-green mb-6 text-center">Our Services Offered</h1>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={service._id} xs={12} sm={6} md={4}>
            <ServiceCard {...service} onBook={() => handleOpenBooking(index)} />
          </Grid>
        ))}
      </Grid>

      <ModalBooking
        open={bookingOpen}
        selectedService={selectedService}
        onClose={handleCloseBooking}
        services={services}
        onBookConfirm={handleConfirmBooking}
      />

      {selectedService !== null && (
        <ConfirmationModal
          open={confirmationOpen}
          onClose={handleCloseConfirmation}
          serviceTitle={services[selectedService].title}
          servicePrice={services[selectedService].price}
          onConfirm={handleFinalConfirm}
        />
      )}

      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={() => setSnackbarOpen(false)}
      />
    </Container>
  )
}

export default Services
