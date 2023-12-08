import React from 'react'
import "./style.css"
const Input = ({placeholder , inputclass, label , onChange ,value , id , name , type}) => {
  return (
   <>
    <p className='newinput__label'>{label}</p>
    <div className='newinput__wrap'>   
    <div className={inputclass}>
        <input required  value={value} onChange={onChange}  placeholder={placeholder} id={id} name={name} type={type} />
    </div>
    </div>
   </>
  )
}

export default Input