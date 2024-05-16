import Footer from '@/components/client/Footer'
import MainGridsHome from '@/components/client/MainGridsHome'
import CarouselHome from '@/components/client/carouselHome'
import React from 'react'

function page() {
    return (
        <>
            <CarouselHome />
            <MainGridsHome />
            <Footer />
        </>
     
  )
}

export default page