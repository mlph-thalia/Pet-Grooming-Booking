import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { serviceTitle, servicePrice, name, address, email, phone } = body

    if (!serviceTitle || !servicePrice || !name || !address || !email || !phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()

    const db = client.db('PetGroomingBooking')
    const bookingsCollection = db.collection('BookedServices')

    const bookingDoc = {
      serviceTitle,
      servicePrice,
      customer: { name, address, email, phone },
      createdAt: new Date(),
    }

    await bookingsCollection.insertOne(bookingDoc)
    await client.close()

    return NextResponse.json({ message: 'Booking confirmed' }, { status: 201 })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()

    const db = client.db('PetGroomingBooking')
    const bookingsCollection = db.collection('BookedServices')

    const bookings = await bookingsCollection.find().toArray()
    await client.close()

    return NextResponse.json(bookings, { status: 200 })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const { ids } = body

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: 'No IDs provided' }, { status: 400 })
    }

    const objectIds = ids.map((id: string) => {
      try {
        return new ObjectId(id)
      } catch {
        throw new Error(`Invalid ObjectId: ${id}`)
      }
    })

    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()
    const db = client.db('PetGroomingBooking')
    const bookingsCollection = db.collection('BookedServices')

    const result = await bookingsCollection.deleteMany({ _id: { $in: objectIds } })
    await client.close()

    return NextResponse.json({ message: `${result.deletedCount} booking(s) deleted` }, { status: 200 })
  } catch (error) {
    console.error('Error deleting bookings:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
