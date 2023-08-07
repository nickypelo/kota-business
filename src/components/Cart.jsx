import '../styles/components.css';

const Cart = ({kota, close}) => {

    const orders = [];

    return(
        <article className="orders-placed">
            <h4>Cart</h4>
            <p onClick={close}>X</p>
            {orders.length<1 ? 
                <p>Empty</p> 
                :
                <section className="orders">
                    <div className="order-details">
                        <p>Buy this kota?</p>
                    </div>
                    <figure className="order-image">
                        <figcaption>{kota}</figcaption>
                    </figure>
                </section>      
            }
        </article>
    )
}

export default Cart;