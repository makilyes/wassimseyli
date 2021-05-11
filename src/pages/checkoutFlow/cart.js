import React from 'react';
import imgYourCart from '../../assests/yourCart.png';
import'./checkoutFlow.scss';

function Cart(props) {
    return (
        <div className="cart">
            <div className="col1">
                <h1>Your cart</h1>
                <div className="tableAndTotal">
                    <table id="cart-summary">
                        <tr>
                            <th>Product info</th>
                            <th>Product name</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>The product info</td>
                            <td>The mission name</td>
                            <td>4,698 $</td>
                        </tr>
                        <tr>
                            <td>The product info</td>
                            <td>The mission name</td>
                            <td>4,698 $</td>
                        </tr>
                    </table>
                    <div className="totalPrice">
                        <p>Total price :</p>
                        <p>6834,00 $</p>
                    </div>
                </div>
            </div>
            <div className="col2">
                <img className="imgYourCart" src={imgYourCart} alt=""/>
            </div>

        </div>
    );
}

export default Cart;