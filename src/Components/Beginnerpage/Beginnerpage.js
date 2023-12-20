import React from "react";

import Footermenu from "../Footermenu/Footermenu";
import BeginnerBox from "./Beginner/BeginnerBox";

const Begginerpage = () => {
    return (
        <div className="home-page">
            <BeginnerBox/>
            <Footermenu/>
        </div>
    );
};

export default Begginerpage;
