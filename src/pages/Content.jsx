import React from "react";
import Reviews from '../components/Reviews.jsx';
import Quote from '../components/Quote.jsx';
import '../styles/pages.css';

const Content = () => {
    return(
        <main className="content">
            <figure className='poster'>poster</figure>
            <figure className='special'>
                <img src="src/assets/discount_2.jpg" alt="" />
            </figure>
            <Reviews />
            <Quote />
        </main>
    )
}

export default Content;