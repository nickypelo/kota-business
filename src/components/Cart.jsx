import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import '../styles/components.css';
import { useNavigate } from "react-router-dom";
import CartContext from "../context.jsx/CartContext";


const Cart = ({close}) => {

    const {order} = useContext(CartContext);

    //checkout option takes you to profile page
    const redirect = useNavigate()

    const change = () =>{
        redirect('/profile')
        close()
    }

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const [display, setDisplay]= useState([])

    
    /**
     * @param: unique key of unique orders
     * @return: number of unique orders added to cart
    */
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
    
 

    // /**
    //  * Increments the counter.
    //  * @param {*} values 
    //  * @param {*} item
    //  */
    // const add = (values, item) =>{
    //     if(values[item].id === 1){
    //         // setCount1(counting1.value+=1)
    //         counting1.value+=1;
    //     }
    //     else if(values[item].id === 2){
    //         // setCount2(counting2.value+=1)
    //         counting2.value+=1;
    //     }
    //     else if(values[item].id === 3){
    //         // setCount3(counting1.value+=1)
    //         counting3.value+=1;
    //     }
    //     else if(values[item].id === 4){
    //         // setCount4(counting1.value+=1)
    //         counting4.value+=1;
    //     }
    // }

    // /**
    //  * function that compiles all the functions
    //  * to add the appropriate items in answer array
    //  * to add the necessary counts
    //  * @param {*} orders 
    //  * @returns answer = unique list
    //  */
    // const countCartOrders = (orders) =>{
    //     let item = 0;
    //     let count = orders.length
    //     let ids = uniqueIds(getIds(orders));

    //     while(count > 0){    
    //         i(ids.includes(orders[item].id)){
    //             let firstOrder = orders[item].id;
    //             let firstOrderIndex = ids.indexOf(firstOrder);
    //             ids.splice(firstOrderIndex,1)
    
    //             answer.push(orders[item])
    //             add(orders, item);
    //             item++;
    //             count--;
    //             continue;
    //         }
    
    //         add(orders, item);
    //         item++;
    //         count--;
    //     }
    //     return answer;
    // }



    /**
     * function that returns array of orders that are grouped by similarities
     * @param {*} full array of orders
     * @return grouped afray
     */
    function check(list){
        let group = []
    
        for(let i = 1; i<list.length; i++){
            const newList = list.filter(item=> item.id===i)
            group.push(newList)
        }
        const newGroup = group.filter(item=> item.length>0) //group without empty arrays. clean up
       
        return newGroup
    }

    /**
     * function that returns unique menu items
     * @param {*} array of orders grouped by similarities
     * 
     */
    function displayOnCart(list) {
        let answer = []
        const newList = list.map(item => answer.push(item[0]))
        // return answer
        setDisplay(answer)
    }
    
    /**
     * @param {*} itemId 
     * @param {*} list 
     * @returns number of items in order
     */
    function itemCounter(id, list){
        const counter = list.filter(group=>id === group[0].id)
    
        if(counter[0]){
            return counter[0].length
        }
        return 0
    }
    
    useEffect(()=>{
        displayOnCart(check(order))
        console.log(display)

    },[order])

    return(
        <article className="orders-placed">
            <section className='cart-heading'>
                <div style={{display:'flex'}}>
                <h4>Cart </h4>
                <button onClick={change} style={{display:'block'}}>checkout</button>
                </div>
                <FaWindowClose className="close-cart" onClick={close} />
            </section>
            {(order).length<1 ? 
                <p className="empty-order">Empty</p> 
                :
                display.map((item) => (
                    <section className="orders" key={item.id}>
                        <div className="order-details">
                            <p>{`${item.product_name} - ${item.product_price}`}</p>
                        </div>
                        <figure className="order-image">
                            <img src={item.product_img} alt=""  />
                            <figcaption >x{itemCounter((item.id), check(order))}</figcaption>
                        </figure>
                    </section> 
    
                ))    
            }
        </article>
    )
}

export default Cart;