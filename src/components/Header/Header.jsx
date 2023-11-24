import React from 'react'
import "./header.css"
import twiter from "../../assets/Images/Svg/twiter.svg"
import dicover from "../../assets/Images/Svg/Discord.svg"
import ME from "../../assets/Images/Svg/Me.svg"
const Header = () => {
  return (
    <header>
       <section className='haeder__section'>
        <div className="container">
            <div className="header-wrapper">
                <a className='site-logo' href="">                                       
                      SiteLogo
                </a>
                <nav className='navlinks'>
                  <a className='navlinks__img' href="">
                    <img src={twiter} alt="" />
                  </a>
                  <a className='navlinks__img' href="">
                  <img width={20} src={dicover} alt="" />
                  </a>
                  <a className='navlinks__img' href="">
                    <img width={20}  src={"https://magiceden.io/_next/image?url=https%3A%2F%2Fnext.cdn.magiceden.dev%2F_next%2Fstatic%2Fmedia%2Flogo_2.8aa56045.png&w=128&q=75"} alt="" />
                  </a>
                </nav>
            </div>
        </div>
       </section>
    </header>
  )
}

export default Header