import React from "react";

const Header = ({ setShowNav, showPage, setShowPage, navItems }) => {
    return (
        <div className="header">
            <h1>Kendrick Koh</h1>
            <img
                src="/images/Icons/Mobile-Nav-Icon.png"
                onClick={() => {
                    setShowNav(true);
                }}
                alt="nav-icon"
            />
            <div className="nav-desktop">
                {navItems.map((item) => (
                    <h3
                        className={
                            showPage == item.index
                                ? "nav-desktop-item-selected"
                                : "nav-desktop-item"
                        }
                        onClick={() => {
                            setShowPage(item.index);
                        }}
                    >
                        {item.item}
                    </h3>
                ))}
            </div>
        </div>
    );
};

export default Header;
