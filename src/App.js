import { useState } from "react";
import Aboutme from "./Components/Aboutme";
import Computing from "./Components/Computing";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbarmobile from "./Components/Navbar/Navbarmobile";
import Portfolio from "./Components/Portfolio";
import content from "./Components/Content.json";

function App() {
    const [showNav, setShowNav] = useState(false);
    const [showPage, setShowPage] = useState(0);

    return (
        <div>
            <Header setShowNav={setShowNav} />
            {showNav === true && (
                <Navbarmobile
                    setShowNav={setShowNav}
                    setShowPage={setShowPage}
                />
            )}
            {showPage === 0 && <Home />}
            {showPage === 1 && <Portfolio images={content.images} />}
            {showPage === 2 && <Computing skills={content.skills} />}
            {showPage === 3 && <Aboutme />}
            <Footer />
        </div>
    );
}

export default App;
