import React from 'react'
import { NavBar } from '../layout/NavBar'
import { Hero } from '../Hero'

export const Landing = () => {
  return (
    <div className='flex flex-col'>
        <NavBar></NavBar>
        <Hero/>
    </div>
  )
}
