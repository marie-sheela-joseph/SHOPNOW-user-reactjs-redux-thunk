import React from 'react'
import { useSelector } from "react-redux";

const Cart = () => {
    let cart = useSelector(state => state.cart)
    let resultJsx = <div className="cart space">
        <h1>Your cart: <span>{cart.length} items</span></h1>
        <div>
            {cart.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT ID</th>
                            <th>PRODUCT IMAGE</th>
                            <th>PRODUCT DESCRIPTION</th>
                            <th>PRICE PER ITEM</th>
                            <th>QUANTITY</th>
                            <th>TOTAL PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <tr key={item.id} className="cart-item">
                            <td>{item.id}</td>
                            <td>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                :
                <div>
                    <div className="image-container-cart-empty d-flex justify-content-center align-items-center">
                        <img src="./images/emptycart.png" alt="" />
                    </div>
                </div>
            }
        </div>
    </div>
    return <div className="container">{resultJsx}</div>
}
export default Cart