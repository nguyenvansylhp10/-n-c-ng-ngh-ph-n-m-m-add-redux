import { CartIcon } from 'components/icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import './card.css'

import React, { useState, useEffect } from 'react'

function Card() {
    const sogiohang = useSelector(state => state.counterReducer.sogiohang)
    const sp = useSelector(state => state.counterReducer.Carts)
    const [state, setstate] = useState(sp)
    useEffect(() => {
        setstate (sp) ;
        
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
                    state

                        <div>
                            <p>{item.name}</p>
                        </div>)}

                </div>
            </div>
        </div>
    );
}

export default Card;