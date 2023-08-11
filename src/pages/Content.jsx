import React from "react";
import Reviews from '../components/Reviews.jsx';
import Quote from '../components/Quote.jsx';
import '../styles/pages.css';
import '../styles/media.css';

const Content = () => {
    return(
        <main className="content">
            <figure className='poster'>
                <p>Reka Ngwana</p>
            </figure>
            <section className="special">
                <section className="text">
                    <p>Check out our page every Tuesday and Thursday to find out what new deals are waiting for you!</p>
                    <p>Don't miss out. </p>
                    {/* <p className="hashtag">#forgetthedietandeatakota</p> */}
                </section>
                <figure>
                    <img src="src/assets/discount_2.jpg" alt="" width="350"/>
                </figure>
            </section>
            <h3>Word of Mouth</h3>
            <Reviews />
            <Quote />
        </main>
    )
}

export default Content;