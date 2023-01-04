import React from "react";

const Navbar_mobile = ({ setShowNav }) => {
    return (
        <div className="navbar_mobile">
            <img
                src="/images/Icons/Mobile_Navbar_Exit.png"
                alt="close"
                onClick={() => {
                    setShowNav(false);
                }}
            />
            <div className="navbar_mobile_main">
                <h2>Home</h2>
                <h2>Portfolio</h2>
                <h2>Computing</h2>
                <h2>About Me</h2>
            </div>
        </div>
    );
};

export default Navbar_mobile;
