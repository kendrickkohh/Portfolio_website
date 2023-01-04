import React from "react";

const Header = ({ setShowNav }) => {
    return (
        <div className="header">
            <h1>Kendrick Koh</h1>
            <img
                src="/images/Icons/Mobile-Nav-Icon.png"
                onClick={() => {
                    setShowNav(true);
                }}
            />
        </div>
    );
};

export default Header;
