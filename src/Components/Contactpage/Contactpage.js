import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import Contact from "./Contact/Contact";

const Contactpage = () => {
    return (
        <div className="home-page">
            <Contact/>
            <Footermenu/>
        </div>
    );
};

export default Contactpage;
