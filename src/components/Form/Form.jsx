import React, { useState } from 'react';
import './form.css'
const MyForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',

      });
    
      const [errors, setErrors] = useState({
        username: '',
        email: '',
 
      });
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };
    
        // Validate username
        if (formData.username.trim() === '') {
          newErrors.username = 'Username is required';
          isValid = false;
        } else {
          newErrors.username = '';
        }
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Invalid email address';
          isValid = false;
        } else {
          newErrors.email = '';
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
            <h2 className='form-section__title'>Form</h2>
      <div> 
        <label className='form-seciton__label' htmlFor="username">Username:</label>
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
        <label className='form-seciton__label'  htmlFor="email">Email:</label>
        <input
         className='form-section__input'
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p className='form__error'>{errors.email}</p>       
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
