'use client'

import React from 'react'
import { Modal, Box, Typography, IconButton, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FacebookIcon from '@mui/icons-material/Facebook'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflow: 'auto',
}

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box sx={modalStyle}>
        <div className="flex justify-between items-center mb-4">
          <Typography id="contact-modal-title" variant="h5" component="h2" className="text-primary-green font-bold">
            Contact Information
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </div>

        <Divider sx={{ mb: 3 }} />

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <PhoneIcon className="text-primary-green" />
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-700">
                Phone Numbers
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                +63 123 456 7890
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                +63 987 654 3210
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <EmailIcon className="text-primary-green" />
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-700">
                Email Address
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                info@petgroomingservice.com
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                booking@petgroomingservice.com
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <LocationOnIcon className="text-primary-green mt-1" />
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-700">
                Address
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                MSU Compound Brgy. Fatima
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                General Santos City
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Near Chancellor's Cottage
              </Typography>
              <a
                href="https://maps.app.goo.gl/KVVMNS3yq2f8nGUY9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AccessTimeIcon className="text-primary-green mt-1" />
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-700">
                Business Hours
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Monday - Saturday: 8:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Sunday: 9:00 AM - 4:00 PM
              </Typography>
              <Typography variant="body2" className="text-gray-600 text-sm italic">
                * By appointment only on Sundays
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FacebookIcon className="text-primary-green" />
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-700">
                Follow Us
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                <a
                  href="https://facebook.com/petgroomingservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Facebook Page
                </a>
              </Typography>
            </div>
          </div>
        </div>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" className="text-center text-gray-600">
          We're here to make your pets look their best! Contact us for appointments and inquiries.
        </Typography>
      </Box>
    </Modal>
  )
}

export default ContactModal
