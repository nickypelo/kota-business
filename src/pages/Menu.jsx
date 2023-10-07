import React, { useContext } from "react";
import { useState, useEffect } from "react"
import { FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import CartContext from "../context.jsx/CartContext";

class Counting{
    constructor(value){
        this.value = value;
    }
}

const Menu = () => {

    const API_URL = 'http://localhost:8000/product/';

    const [menuItems, setMenuItems] = useState([]);

    const {addedToCart, removeFromCart} = useContext(CartContext)

    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);

    const counting1 = new Counting(count1);
    const counting2 = new Counting(count2);
    const counting3 = new Counting(count3);
    const counting4 = new Counting(count4);

    const returnValue = (selectedKota) =>{
        if(selectedKota===1){
            return counting1.value;
        }else if(selectedKota===2){
            return counting2.value
        }else if(selectedKota===3){
            return counting3.value
        }else if(selectedKota===4){
            return counting4.value
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

    function displayOnCart(list) {
        let answer = []
        const newList = list.map(item => answer.push(item[0]))
        return answer
    }

    const counter = (selectedKota, num) =>{

        if(returnValue(selectedKota) + num >= 0){
            if(selectedKota === 1){
                count1+=num;
                setCount1(count1)
                counting1.value+=count1;
            }else if(selectedKota === 2){
                count2+=num;
                setCount2(count2)
                counting2.value+=count2;
            }else if(selectedKota === 3){
                count3+=num;
                setCount3(count3)
                counting3.value+=count3;
            }else if(selectedKota === 4){
                count4+=num;
                setCount4(count4)
                counting4.value+=count4;
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
                                <FaMinus className= "addOn-icon"  onClick={() => counter(menu.id,-1)}/>
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