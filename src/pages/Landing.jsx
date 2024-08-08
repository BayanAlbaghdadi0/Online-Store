import React from 'react'
import { NavBar } from '../components/layout/NavBar'
import { Hero } from '../components/Hero'
import { Overview } from '../components/Overview'
// import { Categories } from '../components/Categories'

export const Landing = () => {
  return (
    <div className='flex flex-col overflow-y-hidden text-center bg-slate-950'>

        <NavBar></NavBar>
        <Hero/>

        {/* <Categories/> */}
        <Overview/>
    </div>
  )
}
