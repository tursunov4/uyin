import React from 'react'
import "./style.css"
import FormButton from '../FormButton/FormButton'
import discord from "../../assets/Images/Svg/DicordButton.svg"
import discormmodal from "../../assets/Images/Svg/DicordModal.svg"
import close from "../../assets/Images/Svg/close.svg"
const Conirm = ({onSubmit ,onConfirm , modalClose}) => {
  return (
    
    <div className='confirm__border'>
        <p onClick={modalClose} className='modalclose'>CLOSE <img src={close} alt="" /></p>
        <div className="confirm__border-inner">
          <div className="confirm__wrapper">
            <img src={discormmodal} alt="" />
            <h3 className="cofirm__title">
            Join our Discord server
            </h3>
            <p className="confirm__text">
            to participate in Whitelist raffle
            </p>
          </div>
           <div className='modalbuttons'>
           <FormButton onClick={onSubmit}  buttondivclass={"buttundiv2"} img={discord} imgtrue={true}  text={"SUBMIT"} />  
          <FormButton  onClick={onConfirm} buttondivclass={"buttundiv2"}    text={"Join"} />  
           </div>
        </div>
    </div>
  )
}

export default Conirm