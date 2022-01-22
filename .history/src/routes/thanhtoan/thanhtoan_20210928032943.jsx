import React, { useState, useEffect } from 'react'
import './Thanhtoan.scss'
import { Link } from 'react-router-dom'

import { Deleteicon } from 'components/icons/icons'

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

    function xoa(cc){
        console.log(cc)
        const h = state.filter((item,id )=>{
            return item.id !=  item.cc;
        })
       setstate(h)
    }
    console.log(state)

    return <div className="body">
        <div className="thanhtoan">


            {state && state.map((item, index) =>


                <div>

                    <div className="thanhtoan_card">
                        <div className="thanhtoan_card_price">
                            <p className="price">{item.id}</p>
                        </div>
                        <div className="thanhtoan_card_img">
                            <img src={item.img} alt="" />
                        </div>

                        <div className="thanhtoan_card_price">
                            <p className="price">{item.price}</p>
                        </div>
                        <h2 className="thanhtoan_card_name">{item.name}</h2>
                        <div className="product-xoa">
                            <Deleteicon className="xoa" onClick={xoa(item.id)} ></Deleteicon>
                        </div>

                    </div>
                </div>)}

        </div>

    </div>;
}





