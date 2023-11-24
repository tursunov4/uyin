import React from 'react'
import "./style.css"
import Number from './Number'
const UserNumbers = () => {
  return (
    <section className='usernum-section'>
      <div className="container">
        <div className="usernum__wrap">
            <div className="usernum-image">
                Game-image
            </div>
               <div className="user__about">
                <h3 className='usernum__title'>Users Number:</h3>
               <p className="usernum__number">
                <Number n={99}/>
              </p>
               </div>
        </div>
      </div>
    </section>
  )
}

export default UserNumbers