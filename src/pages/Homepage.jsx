import React from 'react'
import Header from '../components/Header/Header'
import UserNumbers from '../components/UserNumbers/UserNumbers'
import MyForm from '../components/Form/Form'
import "./home.css"
import Conirm from '../components/Confirm/Conirm'
import Clock from '../components/Clock/Clock'
const Homepage = () => {
  return (
    <div className='homepage-section'> 
        <MyForm/> 
       <div className="clockhome">
        <Clock/>
       </div>
    </div>

  )
}

export default Homepage