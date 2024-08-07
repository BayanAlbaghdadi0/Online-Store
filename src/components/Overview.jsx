import React from 'react'
import { GlassCard } from './ui/GlassCard'
export const Overview = () => {
  return (
    <>
    <div className=' flex justify-evenly bg-slate-950 flex-wrap gap-4'>
        {[0,1,2,3,4,5].map(element =><GlassCard/>)
      }
    </div>
    <q className='text-3xl'>anguesa❤️</q>
    </>
  )
}
