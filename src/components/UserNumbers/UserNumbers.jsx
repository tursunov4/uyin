
import "./style.css"
import Number from './Number'

const UserNumbers = () => {

  return (
    <section className='usernum-section'>
      <div className="container">
        <div className="usernum__wrap">
            {/* <div className="usernum-image">
                Game-image
             </div> */}
               <div className="user__about">
                <h3 className='usernum__title'>Game participants:</h3>
               <p className="usernum__number  ">
                <Number />
              </p>
               </div>
        </div>
      </div>
    </section>
  )
}

export default UserNumbers