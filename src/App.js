import { useState } from "react";
import Home from "./Components/Home";
import Navbar_mobile from "./Components/Navbar/Navbar_mobile";

function App() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            {showNav === true && <Navbar_mobile setShowNav={setShowNav} />}
            <Home setShowNav={setShowNav} />
        </div>
    );
}

export default App;
