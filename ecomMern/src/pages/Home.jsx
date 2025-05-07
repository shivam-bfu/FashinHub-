import React from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicies from '../components/OurPolicies'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 max-w-7xl mx-auto ">
    <Hero />
    <LatestCollection/>
    <BestSeller/>
    <OurPolicies/>
    <NewsLetter/>
  </div>
  
  )
}

export default Home
