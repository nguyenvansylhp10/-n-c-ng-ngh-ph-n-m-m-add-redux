import { CartIcon } from 'components/icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import './card.css'
import { Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react'

function Card() {
    const sogiohang = useSelector(state => state.counterReducer.sogiohang)
    const sp = useSelector(state => state.counterReducer.Carts)
    const [state, setstate] = useState(sp)
    useEffect(() => {
        setstate(sp);

    }, [sp]);


    return (
        <div>
            <div class="dropdown">
                <div className="header__content-cart ">
                    <div className="header__content-cart-icon">
                        <CartIcon className="cart-icon"></CartIcon>
                    </div>
                    <div className="header__content-cart-counter">
                        <p>({sogiohang})</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    {state && state.map((item, index) =>


                        <div className="thanhtoan">
                            <Link to="/Thanhtoan" >

                            <div className="thanhtoan_card">
                                
                                <div className="thanhtoan_card_img">
                                    <img src={item.img} alt="" />
                                </div>
                                
                                <div className="thanhtoan_card_price">
                                    <p className="price">{item.price}</p>
                                </div>
                                <h2 className="thanhtoan_card_name">{item.name}</h2>


                            </div>
                            </Link>
                        </div>)}

                </div>
            </div>
        </div>
    );
}

export default Card;