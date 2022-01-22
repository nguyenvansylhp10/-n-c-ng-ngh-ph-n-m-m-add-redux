import React, { useState, useEffect } from 'react'
import './Thanhtoan.scss'
// import './switch-tab.js'
import { Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'
import $ from "jquery"

export const Thanhtoan = () => {
  const count = useSelector(state => state.counterReducer.counter)
  const dispatch = useDispatch();
  const [imageProduct] = useState([
    require('assets/images/product-detail-1.jpg'),
    require('assets/images/product-detail-2.jpg'),
    require('assets/images/product-detail-3.jpg'),
    require('assets/images/product-detail-4.jpg'),
    require('assets/images/product-detail-5.jpg'),
  ])
  const [size, setSize] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentTab, setCurrentTab] = useState(1)



  
  return <div className="thanhtoan">
  


  </div>;
}




