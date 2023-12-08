
import "./style.css"
import Number from './Number'

const UserNumbers = () => {

  return (
      <div className="usernumbers-section">
          <h3 className="usernumbers__title">participants:</h3>
          <p className="username__number"><Number/></p>
      </div>
  )
}

export default UserNumbers