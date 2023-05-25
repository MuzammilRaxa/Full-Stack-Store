import React from 'react'
// import "./home.scss"
import Slider from '@/components/slider/slider'
import FeaturedProducts from '@/components/featuredProducts/FeaturedProducts'
import Categories from '@/components/categories/categories'
import Contact from '@/components/contact/contact'
import Navbar from '@/components/navbar/Navbar'
const HomeMain = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default HomeMain