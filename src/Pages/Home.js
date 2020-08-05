import React,{useContext,useEffect} from 'react'
import {ShopContext} from '../Context/Context'

const Home = () => {
  const {test} =  useContext(ShopContext)
    return (
        <div>
            Home
            {test}
        </div>
    )
}

export default Home
