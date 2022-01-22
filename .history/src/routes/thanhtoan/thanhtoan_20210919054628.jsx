import React, { useState, useEffect } from 'react'
import './Thanhtoan.scss'
import { Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'

export const Thanhtoan = () => {
  const count = useSelector(state => state.counterReducer.counter)
  const dispatch = useDispatch();

  const [size, setSize] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentTab, setCurrentTab] = useState(1)


  const sogiohang = useSelector(state => state.counterReducer.sogiohang)
    const sp = useSelector(state => state.counterReducer.Carts)
    const [state, setstate] = useState(sp)
    useEffect(() => {
        setstate(sp);

    }, [sp]);


  
  return <div className="thanhtoan">
  
    <p>123</p>

  </div>;
}




