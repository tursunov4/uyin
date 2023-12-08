import React from 'react'
import MyForm from '../components/Form/Form'
import "./home.css"
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