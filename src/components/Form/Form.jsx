import React, { useContext, useState } from 'react';
import './form.css'
import axios from 'axios';
import { Context } from '../../Context/Context';
import Tost from '../Tost/Tost';
import Tosterr from '../Tosterr/Tosterr';
const MyForm = () => {
  const {refresh , setRefresh} = useContext(Context)
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [massage , setMassage] = useState("")
  const [massage2 , setMassage2] = useState("")

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

      });
    
      const [errors, setErrors] = useState({
        username: '',
        id: '', 
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
        
        if (formData.id.trim() === '' ) {
          newErrors.id = 'Discord ID is required ! ';
          isValid = false;
        }  
        else if(formData.id.trim().length <17){
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
          axios.post( `${process.env.REACT_APP_API}/participant/`, {
            address_wallet: formData.username,
            discord_id: formData.id
          }).then((res)=>{
            console.log(res.data.message)
            setMassage(res.data.message)
            showToastOnClick()
            setFormData({
              username: '',
              id: '',       
            })
            window.scrollTo(0, 0);
            setRefresh(!refresh)
          }).catch((err)=>{  
            console.log(err)   
            setMassage2(err.response.data.message)
            showToastOnClick2()
            
          })
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
    

  return (
     <section className="form-section">
        {showToast && <Tost message={massage} onClose={handleToastClose} />}
        {showToast2 && <Tosterr message={massage2} onClose={handleToastClose2} />}
        <div className="container">
        <form className='form-section__form' onSubmit={handleSubmit}>
            <h2 className='form-section__title'>Become a Member</h2>
      <div> 
        <label className='form-seciton__label' htmlFor="username">Wallet addresses</label>
        <input
          className='form-section__input'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder='Wallet addresses...'
        />
        <p className='form__error'>{errors.username}</p>
      </div>
      <div>
        <label className='form-seciton__label'  htmlFor="email">Discord ID</label>
        <input
         className='form-section__input'
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder='Discord id...'
        />
        <p className='form__error'>{errors.id}</p>       
      </div>
      <div>
     
      </div>
      <button className='form-section__btn' type="submit">Submit</button>
      </form>
        </div>
     </section>
  );
};

export default MyForm;
