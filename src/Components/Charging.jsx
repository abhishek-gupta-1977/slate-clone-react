import React from 'react'
import ChargingHero from './ChargingHero'
import SlateCombo from './SlateCombo'
import ChargingCard from './ChargingCard'
import ChargingStart from './ChargingStart'
import ChargingRange from './ChargingRange'

const Charging = () => {
  return (
    <>
       <div className='bg-[#262626]'>
         <ChargingHero/>
        <SlateCombo/>
        <ChargingCard/>
        <ChargingStart/>
        <ChargingRange/>

       </div>
    </>
  )
}

export default Charging
