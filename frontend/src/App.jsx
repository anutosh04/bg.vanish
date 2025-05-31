import React from 'react'
import {Home, Result,Price} from './pages/index'
import { Routes, Route } from 'react-router-dom'
import {Header,Footer} from './components/index'

const App = () => {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App