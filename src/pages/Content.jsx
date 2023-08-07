import Reviews from '../components/Reviews.jsx';
import '../styles/pages.css';

const Content = () => {
    return(
        <main className="content">
            <figure className='poster'>poster</figure>
            <figure className='special'>special</figure>
            <Reviews />
        </main>
    )
}

export default Content;