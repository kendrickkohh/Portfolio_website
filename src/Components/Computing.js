import React from "react";

const Computing = ({ skills }) => {
    return (
        <div>
            <div className="skills-container">
                <h2>Skills</h2>
                {skills.map((item) => (
                    <div className="skills-item">
                        <h3>{item.skill}</h3>
                        <div className="progressbar">
                            <div
                                style={{
                                    height: "100%",
                                    width: `${item.percentage}`,
                                    backgroundColor: `${item.color}`,
                                    transition: "width 0.5s",
                                    borderRadius: "5px",
                                }}
                            ></div>
                            <span className="progressPercent"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Computing;
