import React, { useContext } from "react";
import { useState, useEffect } from "react"
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import CartContext from "../context.jsx/CartContext";

const Menu = () => {

    const API_URL = 'http://localhost:8000/product/';

    const [menuItems, setMenuItems] = useState([]);

    const {addedToCart, removeFromCart} = useContext(CartContext)

    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);

    const returnValue = (selectedKota) =>{
        if(selectedKota===1){
            return count1
        }else if(selectedKota===2){
            return count2
        }else if(selectedKota===3){
            return count3
        }else if(selectedKota===4){
            return count4
        }
    }

    function check(list){
        let group = []
    
        for(let i = 1; i<list.length; i++){
            const newList = list.filter(item=> item.id===i)
            group.push(newList)
        }
        const newGroup = group.filter(item=> item.length>0) //group without empty arrays. clean up
       
        return newGroup
    }

    const counter = (selectedKota, num) =>{
        if(returnValue(selectedKota) + num >= 0){
            if(selectedKota === 1){
                setCount1(count1 + num)
            }else if(selectedKota === 2){
                setCount2(count2+num)
            }else if(selectedKota === 3){
                setCount3(count3+num)
            }else if(selectedKota === 4){
                setCount4(count4+num)
            }
        }

        num>0 ? addedToCart(selectedKota, menuItems) : removeFromCart(selectedKota, check(menuItems));
        
    }

    //Get menu from server
    useEffect(() =>{

        const fetchItems = async () =>{
            try {
                const response = await axios.get(API_URL);
                setMenuItems(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchItems();
    }, [])

    return(
        <section className="menu">
            <h1>Menu</h1>
            <div className="menu-list">
                {menuItems.map((menu)=>(
                    <article className="menu-option" key={menu.id}>
                        <figure className="kota-img" style={{backgroundImage: `url(${menu.product_img})`}}></figure>
                        <div className="kota-details">
                            <div className="name-price">
                                <p>{menu.product_name}</p>
                                <p>R{menu.product_price}</p>
                            </div>
                            <p className="ingredients">{menu.product_ingredients}</p>
                            <div className="addOn-cart">
                                <FaMinus className= "addOn-icon"  onClick={() => counter(menu.id, -1)}/>
                                <p>{returnValue(menu.id)}</p>
                                <FaPlus className= "addOn-icon"  onClick={() => counter(menu.id, 1)}/>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
        </section>
    )
}

export default Menu;