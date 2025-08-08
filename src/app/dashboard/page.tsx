'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import dog from '@/assets/img/dog.jpg'
import Link from 'next/link'
import ContactModal from '@/components/ui/modalContactUs'
interface Service {
  id: string
  title: string
  description?: string
  price?: number
}

const DashboardPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/getAllServices')
        const data: Service[] = await res.json()
        setServices(data)
      } catch (error) {
        console.error('Failed to fetch services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  const handleContactModalOpen = () => setContactModalOpen(true)
  const handleContactModalClose = () => setContactModalOpen(false)

  return (
    <>
      <main className="min-h-screen bg-footer-color flex">
        <section className="w-3/5 flex flex-col justify-center p-8 md:p-16 bg-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary-green mb-6">
              We Make Your <span className="text-primary-violet font-semibold">Pets</span> Look Their{' '}
              <span className="text-primary-violet font-semibold">Best</span>
            </h1>

            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-primary-green mb-4">Our Services</h2>

              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-green"></div>
                  <span className="ml-2 text-gray-600">Loading services...</span>
                </div>
              ) : services.length > 0 ? (
                <div className="grid gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">{service.title}</h3>
                        {service.description && <p className="text-sm text-gray-600 mt-1">{service.description}</p>}
                      </div>
                      {service.price && <div className="text-primary-green font-semibold">{service.price}</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 py-4">No services available at the moment.</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Link
              href="/services"
              className="bg-primary-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium inline-block text-center"
            >
              Book Appointment
            </Link>
            <button
              onClick={handleContactModalOpen}
              className="border border-primary-green text-primary-green px-6 py-3 rounded-md hover:bg-primary-green hover:text-white transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          <div className="text-gray-600">
            <h3 className="font-semibold mb-2">Visit Us:</h3>
            <p className="text-primary-violet">MSU Compound Brgy. Fatima General Santos City</p>
            <p className="text-primary-violet">Near Chancellor's Cottage</p>
            <p className="text-primary-violet">
              Google Map:{' '}
              <a
                href="https://maps.app.goo.gl/KVVMNS3yq2f8nGUY9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                https://maps.app.goo.gl/KVVMNS3yq2f8nGUY9
              </a>
            </p>
          </div>
        </section>

        <section className="relative w-2/5">
          <Image
            src={dog}
            alt="dog bathe"
            fill
            priority
            className="object-cover"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          />
        </section>
      </main>

      <ContactModal open={contactModalOpen} onClose={handleContactModalClose} />
    </>
  )
}

export default DashboardPage
