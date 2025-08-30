import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Home from './Components/Home'
import Personalisation from './Components/Personalisation'
import Charging from './Components/Charging'
import Maker from './Components/Maker'
import FAQ from './Components/FAQ'
import Merch from './Components/Merch'
import SigninPage from './Components/SigninPage'
import ReservePage from './Components/ReservePage'
import Footer from './Components/Footer'
import ContactUs from './Components/ContactUs'
import WorkSlate from './Components/WorkSlate'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/personalisation' element={<Personalisation/>}/>
        <Route path='/maker' element={<Maker/>}/>
        <Route path='/Charging' element={<Charging/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/merch' element={<Merch/>}/>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/reserve' element={<ReservePage/>}/>


        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/work-at-slate' element={<WorkSlate/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
