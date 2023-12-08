import React from 'react'
import "./style.css"
const FormButton = ({buttondivclass , img ,text , imgtrue , onClick , immtrue2 }) => {
  return (
    <div  onClick={onClick}  className="buttondiv__main" >
        <div className={buttondivclass}>
        <button type='submit' >
            {
                imgtrue && 
               <img src={img} alt="" />
            }
            <p className='buttondiv__maintext'>{text}</p>
            {
              immtrue2 &&
              <img src={img} alt="" />
            }
        </button>
        </div>
    </div>
  )
}

export default FormButton