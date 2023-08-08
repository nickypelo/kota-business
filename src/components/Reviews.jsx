import React from "react";

import '../styles/components.css';

const Reviews = () => {
    const pics = [
        {
            id: 1,
            picture: "src/assets/review_1.jpg",
            caption: 'customer 1'
        },
        {
            id: 2,
            picture: "src/assets/review_2.jpg",
            caption: 'customer 2'
        },
        {
            id: 3,
            picture: "src/assets/review_3.jpg",
            caption: 'customer 2'
        },
        {
            id: 4,
            picture: "src/assets/review_5.jpg",
            caption: 'customer 2'
        }
    ]
    return (
        <section className="reviews">
            {pics.map((review)=>(
                <figure className="feedback">
                    <img src={review.picture} alt="review" />
                    <figcaption>{review.caption}</figcaption>
                </figure>
               
            ))}
        </section>
    )
}

export default Reviews;