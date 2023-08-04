const Cart = ({kota}) => {
    return(
        <article className="orders-placed">
            <h1></h1>
            <section className="orders">
                <div className="order-details">
                    <h3>Buy this kota?</h3>
                </div>
                <figure className="order-image">
                    <figcaption>{kota}</figcaption>
                </figure>
            </section>
        </article>
    )
}

export default Cart;