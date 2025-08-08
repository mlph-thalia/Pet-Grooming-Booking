import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    return NextResponse.json({ message: 'Missing MongoDB URI' }, { status: 500 })
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()

    const database = client.db('PetGroomingBooking')
    const collection = database.collection('Services')

    const allData = await collection.find({}).toArray()

    return NextResponse.json(allData)
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 })
  } finally {
    await client.close()
  }
}
