import { Link } from 'react-router-dom'
import SocialMedia from "../components/social-media/SocialMedia";

function KeyPolicies() {
    return (
        <>
            <h1 className='page-header'>Key Policies</h1>
            <div className='margin-width two-col'>
                <div>Under Construction</div>
                <div className='col2'>
                    <h3 className="col2-header">Plan Your Visit</h3>
                    <ul>
                        <li>
                        <Link className="col2-link" to="/about-us">
                            About Us
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/tickets">
                            Get Tickets
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/contests-promotions">
                            Contest &#38; Promotions
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/bring-your-dog">
                            Bring Your Dog
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/find-hotels">
                            Find a hotel
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/directions">
                            Directions
                        </Link>
                        </li>
                        <li>
                        <Link className="col2-link" to="/faq">
                            FAQ
                        </Link>
                        </li>
                    </ul>
                    <SocialMedia />
                </div>
            </div>
            </>
    )
}

export default KeyPolicies