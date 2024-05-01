import React from 'react';
import './Maincard.css'; // Import CSS file for styling

const Maincard = ({ actualData }) => {
    // Check if actualData exists and has the necessary properties
    if (!actualData || !actualData.jawsummary || !actualData.jawsummary.backgroundImage) {
        return (
            <div className="maincard">
                <p>Error: Data is missing or invalid</p>
            </div>
        );
    }

    // Destructure the data object from actualData
    const { jawsummary } = actualData;

    return (
        <div className="maincard">
            <div className="container">
                <div className="wrapper">
                    <div className="bannerImage">
                        <figure>
                            <img src={jawsummary.backgroundImage.url} alt={jawsummary.title} />
                        </figure>
                    </div>
                </div>
            </div>
            <h1>{jawsummary.title}</h1>
        </div>
    );
};

export default Maincard;
