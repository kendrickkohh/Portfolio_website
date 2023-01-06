import React from "react";

const Portfolio = ({ images }) => {
    return (
        <div className="portfolio-container">
            {images.map((item) => (
                <img
                    className="portfolio-item"
                    src={item}
                    alt="portfolio item"
                />
            ))}
        </div>
    );
};

export default Portfolio;
