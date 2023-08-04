import { useState } from "react"

const Menu = () => {
    const menuItem =
        {
            id: 1,
            name: "CHIP ROLL KOTA",
            price: "R30.00",
            ingredients: "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
            img: "picture"
        }


    const order = () => {
        console.log("add to cart")
    }

    return(
        <article className="Menu">
            <h1>Menu</h1>
            {/* {menu.map((menuItem)=>{ */}
                <section className="menu-option">
                    <div className="kota-img" onClick={order}>{menuItem.img}</div>
                    <div className="kota-details">
                        <p className="kota-name">{menuItem.name}</p>
                        <p className="kota-price">{menuItem.price}</p>
                        <div className="ingredients">{menuItem.ingredients}</div>
                    </div>
                    
                </section>
            {/* })}; */}
            
        </article>
    )
}

export default Menu;