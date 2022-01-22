import { CartIcon } from 'components/icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import './card.css'

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


                        <div>
                            <div className="product">
                                <div className="product-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="product-price">
                                    <p className="price">{item.id}</p>
                                </div>
                                <div className="product-price">
                                    <p className="price">{item.price}</p>
                                </div>
                                <h2 className="product-title">{item.title}</h2>
                                <div className="price-status">{item.status.content}</div>


                            </div>
                        </div>)}

                </div>
            </div>
        </div>
    );
}

export default Card;