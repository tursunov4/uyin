import React, { useContext, useState } from 'react';
import './form.css'
import axios from 'axios';
import { Context } from '../../Context/Context';
import Tost from '../Tost/Tost';
import Tosterr from '../Tosterr/Tosterr';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import submit from "../../assets/Images/Svg/submit.svg"
import UserNumbers from "../UserNumbers/UserNumbers"
import Dicover from "../../assets/Images/Svg/Discord.svg"
import Me from "../../assets/Images/Svg/Me.svg"
import tw from "../../assets/Images/Svg/twiter.svg"
import Clock from '../Clock/Clock';
import Modal from '../Modal/Modal';
const MyForm = () => {
  const {refresh , setRefresh} = useContext(Context)
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [massage , setMassage] = useState("")
  const [massage2 , setMassage2] = useState("")
  const [modal , setModal] = useState(false)
  const handleToastClose = () => {
    setShowToast(false);
  };

  const showToastOnClick = () => {
    setShowToast(true);
  };
  const handleToastClose2 = () => {
    setShowToast2(false);
  };

  const showToastOnClick2 = () => {
    setShowToast2(true);
  };

    const [formData, setFormData] = useState({
        username: '',
        id: '', 
        email:""
      });
    
      const [errors, setErrors] = useState({
        username: '',
        id: '', 
        email:""
      });
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };
    
        if (formData.username.trim() === '') {
          newErrors.username = 'Wallet address is required!';
          isValid = false;
        } else {
          newErrors.username = '';
        }
        if (formData.email.trim() === '') {
          newErrors.email = 'Email is required!';
          isValid = false;
        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
          isValid = false;
        } 
         else {
          newErrors.email = '';
        }
        
        if (formData.id.trim() === '' ) {
          newErrors.id = 'Discord ID is required ! ';
          isValid = false;
        }  
        else if(formData.id.trim().length <18){
          newErrors.id = 'Discord ID must be at least 18 characters ! ';
          isValid = false;
        }
        else {
          newErrors.id = '';
        } 
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {

           setModal(true)
        } else {
          console.log('Form not submitted due to validation errors');
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleConfirm = ()=>{
        axios.post(process.env.REACT_APP_API +"/participant/" ,{
          address_wallet: formData.username,
          discord_id: formData.id   ,
          email:formData.email  
        }).then((res)=>{
          if(res.status === 201){
            setModal(false)
            setRefresh(!refresh)
            setMassage(res.data.message)
            showToastOnClick()
            setFormData({
              username: '',
              id: '',     
              email:""  
            })
            window.scrollTo(0, 0);

          }
        }).catch((err)=>{
          console.log(err)
          setModal(false)
          setMassage2(err.response.data.message)
          showToastOnClick2()
        })
      }
    

  return (
     <section className="form-section">
      {
        modal &&
          <Modal hanleConfirm={handleConfirm} modal={modal} setModal={setModal} />
      }
        {showToast && <Tost message={massage} onClose={handleToastClose} />}
        {showToast2 && <Tosterr message={massage2} onClose={handleToastClose2} />}
        <div className="container">

          <div className="mobile-icon">
          <div className='icon-wrap'>
         <a href="">
          <img src={Dicover} alt="" />
         </a>
         <a href="https://twitter.com/RobiesNFT">
          <img src={tw} alt="" />
         </a>
         <a href="">
          <img src={Me} alt="" />
         </a>
        </div>

            <Clock/>

          </div>
          <div className="formnum">
            <UserNumbers/>
          </div>
        <form className='form-section__form' onSubmit={handleSubmit}>
             
             <div> 
      
        <Input
           type={"text"}
           id="username"
           name="username"
           value={formData.username}
            onChange={handleChange}
            placeholder={"Enter your address"}
            inputclass={"inputrotate2"}
            label={"Wallet Addresses*"}
        />

        <p className='form__error'>{errors.username}</p>
      </div>
      <div>
       
          <Input
          type={"text"}
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder='Enter your ID'
            inputclass={"inputrotate1"}
            label={"Discord ID*"}
        />

        <p className='form__error'>{errors.id}</p>       
      </div>
      <div>
  
          <Input
          type={"email"}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your Email'
            inputclass={"inputrotate2"}
            label={"Email*"}
        />

        <p className='form__error'>{errors.email}</p>       
      </div>
       <FormButton  buttondivclass={"buttundiv2"} img={submit} imgtrue={true} text={"SUBMIT"} onClick={handleSubmit} />
 
      </form>
      <div className="iconsdesc">
        <div className='icon-wrap'>
         <a href="">
          <img src={Dicover} alt="" />
         </a>
         <a href="https://twitter.com/RobiesNFT">
          <img src={tw} alt="" />
         </a>
         <a href="">
          <img src={Me} alt="" />
         </a>
      </div>
      </div>
        </div>
        
     </section>
  );
};

export default MyForm;
