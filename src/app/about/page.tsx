import React from 'react'
import Image from 'next/image'
import about from '@/assets/img/about.jpg'

const AboutPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-footer-color flex flex-col md:flex-row">
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white">
          <div>
            <h1 className="text-4xl font-bold text-primary-green mb-6">About Me-ooow~ </h1>

            <p className="text-base md:text-lg text-dark-gray leading-relaxed">
              This app was created as part of my Next.js project training. I truly hope that someday I’ll be able to
              deploy it because I genuinely love the content and the heart behind it.
            </p>

            <p className="text-base md:text-lg text-dark-gray leading-relaxed mt-4">
              My biggest inspiration? My cats — as you can see in the image beside. Their names are{' '}
              <span className="text-primary-green font-semibold">Summer</span>,{' '}
              <span className="text-primary-green font-semibold">Susie</span>, and{' '}
              <span className="text-primary-green font-semibold">Sylver</span>. They’re my everything, and I love them
              so much.
            </p>

            <p className="text-base md:text-lg text-dark-gray leading-relaxed mt-4">
              This app is dedicated to pet grooming services that offer a variety of care and pampering options for your
              beloved pets. <span className="text-primary-green font-semibold">{' ฅ^>⩊<^ ฅ'}</span>
            </p>
          </div>
        </section>

        <section className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center">
          <Image src={about} alt="about us image" />
        </section>
      </main>
    </>
  )
}

export default AboutPage
