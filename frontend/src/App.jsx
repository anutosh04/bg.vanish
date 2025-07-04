import React from 'react'
import {Home, Result, Loading, Pricing} from './pages/index'
import { Routes, Route } from 'react-router-dom'
import {Header,Footer} from './components/index'
import { useEffect } from 'react'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {alert}= useAppContext()
  
  return (
    <div className={`bg-slate-100 min-h-screen ${alert}&&bg-opacity-50`}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        
        <Route path='/loading' element={<Loading/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App