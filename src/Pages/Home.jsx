import React from 'react'
import Header from '../Components/Header'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import SectionFour from '../Components/SectionFour'
import SectionFive from '../Components/SectionFive'
import SectionSix from '../Components/SectionSix'
import SectionSeven from '../Components/SectionSeven'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col mx-auto'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  )
}
