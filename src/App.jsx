import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import Content from "./pages/Content.jsx";
import Menu from "./pages/Menu.jsx";
import Account from "./pages/Account.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./auth/ResetPassword.jsx";
import { useState, useEffect } from 'react';
import RequireAuth from "./auth/RequireAuth.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";

function App() {

  const menuItems = [
    {
        id: 1,
        name: "CHIP ROLL KOTA",
        price: "R40",
        ingredients: "Deep fried chips with our special seasoning topped off with mango atchaar on toasted buns with our secret assorted sauces.",
        img: "/chip_roll.jpg"
    },
    {
        id: 2,
        name: "THE LOVIE WAM KOTA",
        price: "R70",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony with cheddar cheese on toasted buns with our assorted secret sauces.",
        img: "/lovie_wam.jpg"
    },
    {
        id: 3,
        name: "THE BAE KOTA",
        price: "R90",
        ingredients: "Deep fried chips with our special seasoning, mango atchaar, fried viennas and fried polony. Fashioned with our sizzling honey glazed rashers and seared rib burger. Garnished with the finest of cheddar cheese topped with our assorted secret sauces.",
        img: "/bae.jpg"
    },
    {
        id: 4,
        name: "VEGGIE MONATE KOTA",
        price: "R105",
        ingredients: "Deep fried chips with our special seasoning and atchaar. Fashioned with an assortment of vegan sausage, patty and bacon bits. Garnished with the best vegan cheese, topped with our assorted vegan sauces on toasted buns.",
        img: "/veggie_monate.jpg"
    }
]
// 
  let [order, setOrder] = useState([]);

  const addedToCart = (selectedKota) =>{
    // const id = order.length ? order[order.length-1].id + 1 : 1;
    const selected = menuItems.filter((item)=>selectedKota === item.id);
    const add = [...order, ...selected];
    setOrder(add);
    console.log('check cart')
    console.log(order) 
  }

  const removedFromCart = (selectedKota) =>{
    // const id = order.filter((item) => selectedKota===item.id);
    let item = 0;
    for(item; item < order.length; item++){
      if(order[item].id === selectedKota){
        order.splice(item, 1);
        break
      }
    }
    console.log('check cart')
    setOrder([order])
  }

  return (
    <div className="App">
      <Router>
          <Header order={order}/>
          <Routes>
            <Route path ='/' element={<Content/>}/>
            <Route path ='/menu' element={<Menu/>}/>

            <Route path ='/contact' element={<Contact/>}/>
            <Route path ='/about' element={<About/>}/>

            <Route element={<RequireAuth/>}>
              <Route path='/profile' element={<Account/>}/>
            </Route>
            {/* Auth routes */}
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/reset' element={<ResetPassword/>}/>
          </Routes>
          <Footer />
      </Router>      
    </div>
  );
}

export default App;
