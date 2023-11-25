import React, { useState } from 'react';
import './form.css'
const MyForm = () => {
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
    
        // Validate username
        if (formData.username.trim() === '') {
          newErrors.username = 'Wallet address is required!';
          isValid = false;
        } else {
          newErrors.username = '';
        }
        
        if (formData.id.trim() === '') {
          newErrors.id = 'Discord ID is required ! ';
          isValid = false;
        } else {
          newErrors.id = '';
        } 
        setErrors(newErrors);
        return isValid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Form is valid, you can submit the data or perform other actions
          console.log('Form submitted:', formData);
        } else {
          // Form is not valid, do not submit
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
        <div className="container">
        <form className='form-section__form' onSubmit={handleSubmit}>
            <h2 className='form-section__title'>Become a Member</h2>
      <div> 
        <label className='form-seciton__label' htmlFor="username">Wallet addresses:</label>
        <input
          className='form-section__input'
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <p className='form__error'>{errors.username}</p>
      </div>
      <div>
        <label className='form-seciton__label'  htmlFor="email">Diskord ID:</label>
        <input
         className='form-section__input'
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
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
