import React, { useState, useEffect } from 'react'
import './Thanhtoan.scss'
// import './switch-tab.js'
import { Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'

export const Thanhtoan = () => {
  const count = useSelector(state => state.counterReducer.counter)
  const dispatch = useDispatch();

  const [size, setSize] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentTab, setCurrentTab] = useState(1)



  
  return <div className="thanhtoan">
  
    <p>123</p>

  </div>;
}




