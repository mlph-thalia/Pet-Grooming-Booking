'use client'
import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  buttonDetails: string
  onBook: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, buttonDetails, onBook }) => {
  return (
    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" fullWidth onClick={onBook}>
          {buttonDetails}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ServiceCard
