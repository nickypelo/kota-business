import React from "react";
import { useState, useEffect } from "react"
import item from '../assets/chip_roll.jpg';
const Menu = () => {
    const API_URL = 'http://localhost:5500/menu';

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() =>{

        const fetchItems = async () =>{
            try {
                const response = await fetch(API_URL);
                const menuList = await response.json();
                console.log(menuList)
                setMenuItems(menuList);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchItems();
    }, [])
    const order = () => {
        console.log("add to cart")
    }

    return(
        <section className="menu">
            <h1>Menu</h1>
            <div className="menu-list">
                {menuItems.map((menu)=>(
                    <article className="menu-option" key={menu.id}>
                        <figure className="kota-img" style={{backgroundImage: `url(${menu.img})`}} onClick={order}></figure>
                        <div className="kota-details">
                            <div className="name-price">
                                <p>{menu.name}</p>
                                <p>{menu.price}</p>
                            </div>
                            <p className="ingredients">{menu.ingredients}</p>
                        </div>
                        
                    </article>
                ))}
            </div>
            
        </section>
    )
}

export default Menu;