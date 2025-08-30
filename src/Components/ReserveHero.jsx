import React from 'react'
import { ReserveHeroData } from '../Constants'
const ReserveHero = () => {
  return (
    <div className='text-white px-24 pb-20 bg-[#262626]'>
      <img className='mt-20  ' src={ReserveHeroData.image}  />
      <div className='ml-10'>
        <h1 className='text-7xl  font-extrabold -mt-10 mb-10 '>{ReserveHeroData.title}</h1>
        <p className='w-3/4'>{ReserveHeroData.description}</p>
      </div>
    </div>
  )
}

export default ReserveHero
