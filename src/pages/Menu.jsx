import { useState } from "react"

const Menu = () => {
    const menuItem = [
        {
            id: 1,
            name: "CHIP ROLL KOTA",
            price: "R30.00",
            ingredients: "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
            img: "picture"
        },
        {
            id: 2,
            name: "The Bae KOTA",
            price: "R60.00",
            ingredients: "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
            img: "picture"
        }
    ]

    const order = () => {
        console.log("add to cart")
    }

    return(
        <section className="Menu">
            <h1>Menu</h1>
            <div className="menu-list">
                {menuItem.map((menu)=>(
                    <article className="menu-option">
                        <div className="kota-img" onClick={order}>{menu.img}</div>
                        <div className="kota-details">
                            <p className="kota-name">{menu.name}</p>
                            <p className="kota-price">{menu.price}</p>
                            <div className="ingredients">{menu.ingredients}</div>
                        </div>
                        
                    </article>
                ))}
            </div>
            
        </section>
    )
}

export default Menu;