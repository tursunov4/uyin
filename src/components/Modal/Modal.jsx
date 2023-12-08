import React from 'react'
import "./modal.css"
import Comfir from "../Confirm/Conirm"
const Modal = ({modal , setModal , hanleConfirm}) => {
    const closeModal =()=>{
        setModal(false)
    }
    const handleClick =(e)=>{
      console.log(e.target.id)
      if(e.target.id === "modal"){
         setModal(false)
      }
    }
  return (
    <div id='modal' onClick={(e) => handleClick(e)} className='modal'>
       <Comfir onConfirm={hanleConfirm} modalClose={closeModal}/>
    </div>
  )
}

export default Modal