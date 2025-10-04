import React, { useEffect } from 'react'
import './thanks.css'
import { useNavigate } from 'react-router-dom';

function Thankyou() {
    const navigate = useNavigate();

    useEffect(() => {
        // Only reload if it hasn't been reloaded already
        const hasReloaded = sessionStorage.getItem('hasReloadedThankYou');

        if (!hasReloaded) {
            sessionStorage.setItem('hasReloadedThankYou', 'true');
            window.location.reload();
        } else {
            // Clear the flag so next time it can reload again
            sessionStorage.removeItem('hasReloadedThankYou');
        }
    }, []);


    return (
        <div className='thanksmaindiv'>
            <h3>Thank You for Your Submission!</h3>
            <p>Your message has been received successfully. We'll get back to you shortly.</p>
            <button className='thanksbtn' onClick={() => navigate('/')}>Go to Home</button>
        </div>
    )
}

export default Thankyou
