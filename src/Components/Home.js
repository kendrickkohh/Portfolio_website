import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Home = ({ setShowNav }) => {
    return (
        <div className="home">
            <Header setShowNav={setShowNav} />
            <div className="home-body">
                <img src="/images/Portfolio/homemain.jpeg" alt="homemain" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
