'use client'

import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Paper, Box } from '@mui/material'

type BookedService = {
  _id: { $oid: string }
  serviceTitle: string
  servicePrice: string
  customer: {
    name: string
    address: string
    email: string
    phone: string
  }
  createdAt: { $date: { $numberLong: string } } | string
}

export default function BookedServicesPage() {
  const [rows, setRows] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const parseDate = (dateValue: any) => {
    try {
      if (typeof dateValue === 'string') {
        const date = new Date(dateValue)
        return date.getTime() > 0 ? date.toLocaleString() : 'Invalid Date'
      } else if (dateValue?.$date?.$numberLong) {
        const timestamp = parseInt(dateValue.$date.$numberLong)
        const date = new Date(timestamp)
        return date.getTime() > 0 ? date.toLocaleString() : 'Invalid Date'
      } else if (dateValue?.$date && typeof dateValue.$date === 'string') {
        const date = new Date(dateValue.$date)
        return date.getTime() > 0 ? date.toLocaleString() : 'Invalid Date'
      } else {
        return 'No Date'
      }
    } catch (error) {
      console.error('Date parsing error:', error, 'for value:', dateValue)
      return 'Invalid Date'
    }
  }

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        const res = await fetch('/api/bookServices')
        if (!res.ok) throw new Error('Failed to fetch data')
        const data: BookedService[] = await res.json()

        console.log('First item structure:', data[0])

        const formatted = data.map((item, index) => ({
          id: index + 1,
          serviceTitle: item.serviceTitle,
          servicePrice: item.servicePrice,
          customerName: item.customer?.name || '',
          customerEmail: item.customer?.email || '',
          customerPhone: item.customer?.phone || '',
          customerAddress: item.customer?.address || '',
          createdAt: parseDate(item.createdAt),
        }))

        setRows(formatted)
      } catch (error) {
        console.error('Failed to fetch booked services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookedServices()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'serviceTitle', headerName: 'Service', width: 200 },
    { field: 'servicePrice', headerName: 'Price', width: 120 },
    { field: 'customerName', headerName: 'Customer', width: 150 },
    { field: 'customerEmail', headerName: 'Email', width: 250 },
    { field: 'customerPhone', headerName: 'Phone', width: 200 },
    { field: 'customerAddress', headerName: 'Address', width: 320 },
    { field: 'createdAt', headerName: 'Date', width: 200 },
  ]

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-primary-green mb-6 text-center mt-16">Booked Clients</h1>
      <Box sx={{ height: 400, width: '80%', maxWidth: '100%', mx: 'auto', marginTop: 2 }}>
        <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
            pageSizeOptions={[5, 10, 20]}
            sx={{
              width: '100%',
              border: 0,
              fontSize: '0.85rem',
              '& .MuiDataGrid-cell': {
                py: 0.5,
              },
              '& .MuiDataGrid-columnHeaders': {
                fontSize: '0.9rem',
                py: 0.5,
              },
              '& .MuiDataGrid-toolbarContainer': {
                paddingBottom: 1,
              },
            }}
          />
        </Paper>
      </Box>
    </div>
  )
}
