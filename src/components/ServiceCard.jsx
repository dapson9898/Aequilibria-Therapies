import React from 'react'
import './styles/ServiceCard.css'

const ServiceCard = () => {
    return (
        <>
                <div className="card">
                    <div className="icon-wrapper">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13z" />
                            <path d="M9 16a3 3 0 0 0 3 2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3 className="card-title">Acupuncture</h3>
                    <p className="card-description">
                        Traditional Chinese medicine using fine needles to promote natural healing and pain relief.
                    </p>
                </div>
        </>
    )
}

export default ServiceCard
