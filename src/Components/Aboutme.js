import React from "react";

const Aboutme = () => {
    return (
        <div className="aboutme">
            <img
                src="/images/Portfolio/aboutme.jpeg"
                alt="profile"
                className="aboutme-profile"
            />
            <div className="aboutme-container">
                <div className="aboutme-item">
                    Hi, I’m Kendrick. I am an undergraduate in Nanyang
                    Technological University, studying for a Bachelors of
                    Engineering in Computer Science
                </div>
                <div className="aboutme-item">
                    I have an ambition for Software Development, Artificial
                    Intelligence, Machine Learning and web development
                </div>
                <div className="aboutme-item">
                    Aside from computing, I love to sing, model and play
                    basketball
                </div>
                <div className="aboutme-item">
                    <a
                        href="https://drive.google.com/file/d/1TcFnJoRIXyaMq4oaUj3q-95L8gXdP2u3/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Computing Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
