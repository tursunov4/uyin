import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useSpring , animated } from 'react-spring'
import { Context } from '../../Context/Context'

const Number = ({n}) => {
  const {refresh} = useContext(Context)
  const [count , setCount] = useState(0)
    const {number} =useSpring({
        from:{number:0},
        number:count,
        delay:300,
        config:{mass:1 , tension:20, friction:10}
    })

    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API}/participant/count/`).then((res)=>{
     
        setCount(res.data.get_all_count_participant)
      }).catch((err)=>{
      console.log(err)
      })
    },[refresh])

  return (
    <animated.div>
    {number.to((n) =>n?.toFixed(0))}
    </animated.div>
  )
}

export default Number