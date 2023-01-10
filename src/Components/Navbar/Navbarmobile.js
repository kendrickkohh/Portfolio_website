import React from "react";

const Navbarmobile = ({ setShowNav, showPage, setShowPage, navItems }) => {
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
                        className={
                            showPage == item.index
                                ? "nav-mobile-item-selected"
                                : "nav-mobile-item"
                        }
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
