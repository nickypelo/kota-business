import React from "react";
import '../styles/components.css';

const Quote = () =>{
    return(
        <article className="ceo-quote">
            <p>Succumb to peer pressure and get you something for those taste buds!
            </p>
            <figure>
                <img src="src/assets/founder.jpg" alt="ceo-picture" 
                width="200"
                />
                <figcaption><q>Levi the Man</q></figcaption>
            </figure>
        </article>
    )
}

export default Quote;