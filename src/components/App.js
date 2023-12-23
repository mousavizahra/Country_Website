import React from 'react'
// components
import Header from '../components/Header/Header'
import Home from './Home/Index'
import Full from './Full/Index'
import {  BrowserRouter as  Router , Route, Routes} from 'react-router-dom'

export default function App () {
  return (
    <div>
      <Router>

      <Header />

     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/full' element={ <Full/>}/>
     </Routes>
     
      </Router>
    </div>
  )
}
