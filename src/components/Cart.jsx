import React from "react";
import '../styles/components.css';

const Cart = ({kota, close}) => {

    const orders = [7];

    return(
        <article className="orders-placed">
            <section className='cart-heading'>
                <h4>Cart</h4>
                <p onClick={close}>x</p>
            </section>
            {orders.length<1 ? 
                <p>Empty</p> 
                :
                <section className="orders">
                    <div className="order-details">
                        <p>Buy this kota?</p>
                    </div>
                    <figure className="order-image">
                        <img src="src/assets/bae.jpg" alt=""  />
                        <figcaption>{kota}</figcaption>
                    </figure>
                </section>      
            }
        </article>
    )
}

export default Cart;