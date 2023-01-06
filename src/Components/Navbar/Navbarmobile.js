import React from "react";

const Navbarmobile = ({ setShowNav, setShowPage }) => {
    const navItems = [
        { index: 0, item: "Home" },
        { index: 1, item: "Portfolio" },
        { index: 2, item: "Computing" },
        { index: 3, item: "About Me" },
    ];

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
                {navItems.map((item) => (
                    <h2
                        onClick={() => {
                            setShowPage(item.index);
                            setShowNav(false);
                        }}
                    >
                        {item.item}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default Navbarmobile;
