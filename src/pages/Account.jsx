import axios from 'axios';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import AuthContext from '../context.jsx/AuthContext';

const Account = () => {
  
    const [photo, setPhoto] = useState(null);
    const [history, setHistory] = useState([])

    const {user, setUser} = useContext(AuthContext);

    

    function countItems(arr) {
        const itemCounts = {};
        let key = 1;
        for (const item of arr) {
          if (itemCounts[item.date]) {
            itemCounts[item.date].push(
                {
                    id: key,
                    order_name: item.name,
                    order_price: item.price,
                    order_image: item.img,
                }
            );
          } else {
            itemCounts[item.date] = [
                {
                    id: key,
                    order_name: item.name,
                    order_price: item.price,
                    order_image: item.img,
                }
            ]; 
          }
          key++;
        }
      
        // Convert the object to an array of { item, count } pairs
        const result = [];
        for (const item in itemCounts) {
          result.push({ item, repeatedItems: itemCounts[item] });
        }
      
        return result;
    }

    const logOff = () =>{
        setUser('')
    }

    const upload = async(e) =>{
        e.preventDefault();
        console.log('I got the picture');

        const formData = new FormData()
        formData.append('id', 2)
        formData.append('image_user', 4)
        formData.append('profile_picture', photo)

        try{
            const response = await axios.put('http://localhost:8000/image/2', formData)
            console.log(response.data)
        }
        catch(error){
            console.log('not a chance')
        }
    }


    useEffect(()=>{
        console.log('hello')
       const getImage = async () =>{
        try{
            const response = await axios.get(`http://localhost:8000/image/`,{
                'Authorization': `Token ${user[0].success}`
            })
        
            const pics = response.data
            const yes = pics.filter(item => item.image_user === user[1].user_id)
            console.log(yes)
            setPhoto(yes[0].profile_picture)
            
        }
        catch(error){
            console.log(error.message)
        }
       }
       getImage()

    },[photo])

     return (
        //content of the whole page
            <main className="account-container">
                <h2>Profile for {'Nicholas'}</h2>
                {/* account information */}
                <section className='consumer-profile'>
                    <figure className="profile-picture">
                        <img src={photo} alt="" className="picture" width='220' height='250'/>
                        <figcaption>
                            <form onSubmit={upload}>
                                <input type='file'
                                            onChange={(e)=>setPhoto(e.target.files[0])}
                                        />
                                <button>upload</button>
                            </form>
                            {/* <p>{user.first_name} and {user.last_name}</p> */}
                        </figcaption>
                    </figure>
                    <button onClick={logOff}>Log Off</button>
                </section>
                    


                <section className="purchase-history">
                    <h3>Purchase history</h3>
                    {countItems(history).map((time) => (
                        <article className="time-of-purchase" key={time.item}>
                            <h4 className="timeStamp">{time.item}</h4>

                            {time.repeatedItems.map((purchase) => (
                                <div className="purchase" key={purchase.id}>
                                    <p>{purchase.order_name}</p>
                                    <p>{purchase.order_price}</p>
                                    {/* <p>{purchase.order_image}</p> */}
                                    <figure className="order-image"><img src={purchase.order_image} alt=""  /></figure>
                                </div>

                            ))}
                            
                        </article> 
                    ))} 
                </section>
            </main>
        
  )
}

export default Account
