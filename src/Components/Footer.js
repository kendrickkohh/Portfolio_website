import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <a
                    href="https://www.instagram.com/kendrickkohh/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/images/Icons/Instagram_black.png"
                        alt="insta"
                    ></img>
                </a>
                <a
                    href="https://www.linkedin.com/in/kendrick-koh/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/images/Icons/Linkedin_black.png"
                        alt="linkedin"
                    ></img>
                </a>
                <a
                    href="https://github.com/kendrickkohh"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="/images/Icons/Github_black.png"
                        alt="github"
                    ></img>
                </a>
            </div>
            <h4>Kendrick Koh</h4>
        </div>
    );
};

export default Footer;
