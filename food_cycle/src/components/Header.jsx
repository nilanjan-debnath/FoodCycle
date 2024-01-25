import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

import Activities from './Activities';
import Payments from './Payment';
import Login from './Login';
import FeedBack from './Feedback';
import Progress from './Progress';
import AdminDashBoard from './AdminDash';
import Home from "./Home";

function Header() {
    const [hideNavBar, setHideNavBar] = useState(false);
    const navigate = useNavigate();

    const handleNavigationClick = () => {
        // Hide the navigation bar for any navigation button click
        setHideNavBar(true);
    };
    function showNav() {
        setHideNavBar(false);
    }

    return (
        <>
            {!hideNavBar && (
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={showNav}>Home</Link>
                        </li>
                        <li>
                            <Link to="/adminDas" onClick={handleNavigationClick}>AdminDash</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={handleNavigationClick}>Login</Link>
                        </li>
                        <li>
                            <Link to="/feedBack" onClick={handleNavigationClick}>Feedback</Link>
                        </li>
                        <li>
                            <Link to="/payment" onClick={handleNavigationClick}>Payment</Link>
                        </li>
                        <li>
                            <Link to="/progress" onClick={handleNavigationClick}>Progress</Link>
                        </li>
                        <li>
                            <Link to="/activities" onClick={handleNavigationClick}>Activities</Link>
                        </li>
                    </ul>
                </nav>
            )}

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
