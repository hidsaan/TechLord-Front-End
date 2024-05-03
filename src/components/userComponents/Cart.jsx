import React, { useState } from 'react'
import '../userComponents/styles/Cart.scss'
import IsAuthenticated from '../authorization/auth';

const Cart = () => {

    IsAuthenticated();

    const [qty, setQty] = useState(1);
    const [disable, setDisable] = useState(false)

    const handlePlus = () => {

        setQty(qty + 1);
    }

    const handleMinus = () => {

        if (qty == 1) {
            setDisable(true)
        }
        else {
            setDisable(false)
            setQty(qty - 1);
        }
    }
    return (
        <div className='cart'>
            <div className="productcontainer">
                <img src='' alt='image' />
                <div className="productinfo">
                    <p className='productname'>Name</p>
                    <p className='productdes'>Description</p>
                    <p className='productprice'>Price</p>
                </div>
                <div className="btn">
                    <button onClick={handleMinus} disabled={disable}>-</button>
                    {qty}
                    <button onClick={handlePlus}>+</button>
                </div>

            </div>
        </div>
    )
}

export default Cart