import React from 'react'
import './styles/Welcome.css'
// import styled from 

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <div className="welc-text">
                    <h2>Welcome to Aequilibria Therapies</h2>
                    <p>Where ancient wisdom meets modern healing. We are a licensed medical company specializing in comprehensive holistic treatments designed to restore balance and promote natural wellness.

                        Our integrated approach combines six powerful healing modalities to address the root causes of health concerns, not just symptoms. Whether you're seeking pain relief, stress management, or overall wellness enhancement, our experienced practitioners are here to guide your healing journey.

                        Experience the difference of personalized, compassionate care in a serene, professional environment.</p>
                </div>
                <div className="welc-img">
                    {/* <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070" alt="Welcome to Aequilibria Therapies Image" /> */}
                </div>
            </div>
        </>
    )

}
//     const StyledWrapper = styled.div'
//     .welcome{
//     background-color: "red";    
// }
//     ';

export default Welcome
