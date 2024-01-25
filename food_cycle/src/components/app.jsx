import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../app.css';
import Header from './Header';
import Home from './Home';

export function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div>
                <Header />
                {/* Rest of your content */}
            </div>
        </Router>
    );
}
