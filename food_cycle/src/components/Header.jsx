import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Activities from './Activities';
import Payments from './Payment';
import Login from './Login';
import FeedBack from './Feedback';
import Progress from './Progress';
import AdminDashBoard from './AdminDash';
import Home from "./Home";
import Logo from "../../public/images/logo.png";

function Header() {
    const [nav, setNav] = useState(false);
    function handleNav() {
        setNav(!nav);
    }

    return (
        <>
            <nav style={nav === true ? { top: "0%" } : { top: "-16%" }}>
                <div className="name">
                    <div className="image">
                        <img src={Logo} alt="" />
                    </div>
                    <h1 id="name">FoodCycle</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/progress" >Progress</Link>
                    </li>
                    <li>
                        <Link to="/activities" >Activities</Link>
                    </li>
                    <li id="payment">
                        <Link to="/payment" >Raise your helping hand</Link>
                    </li>
                    <li id="login">
                        <Link to="/login" >Login</Link>
                    </li>
                    {/* <li>
                        <Link to="/adminDas" >AdminDash</Link>
                    </li> */}
                    {/* <li>
                        <Link to="/feedBack" >Feedback</Link>
                    </li> */}
                </ul>
                <button id="menu" style={nav === true ? { opacity: "0" } : { opacity: "1" }} onClick={handleNav}><i className="fa-solid fa-bars"></i></button>
                <button id="cross" style={nav === true ? { opacity: "1" } : { opacity: "0" }} onClick={handleNav}><i class="fa-solid fa-xmark" style={{color: "white", opacity: "0.5"}}></i></button>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adminDas" element={<AdminDashBoard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feedBack" element={<FeedBack />} />
                <Route path="/payment" element={<Payments />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/activities" element={<Activities />} />
            </Routes>
        </>
    );
}

export default Header;
