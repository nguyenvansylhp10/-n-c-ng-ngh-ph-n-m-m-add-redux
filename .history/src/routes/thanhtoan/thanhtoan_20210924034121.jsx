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


  
  return <div>
   <div className="thanhtoan_sanpham">
   {state && state.map((item, index) =>


<div>

    <div className="card">
        <div className="card_img">
            <img src={item.img} alt="" />
        </div>
        <div className="card_price">
            <p className="price">{item.id}</p>
        </div>
        <div className="card_price">
            <p className="price">{item.price}</p>
        </div>
        <h2 className="card_name">{item.name}</h2>


    </div>
</div>)}

   </div>

  </div>;
}




