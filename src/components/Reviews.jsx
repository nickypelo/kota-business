import '../styles/components.css';

const Reviews = () => {
    const pics = [
        {
            id: 1,
            picture: "Its a review"
        },
        {
            id: 2,
            picture: "Its a review Again"
        }
    ]
    return (
        <section className="response">
            {pics.map((review)=>(
                <article className="reviews">
                    <figure className="feedback">
                        <img src="" alt="review" />
                        <figcaption>{review.picture}</figcaption>
                    </figure>
                </article>
            ))}
        </section>
    )
}

export default Reviews;