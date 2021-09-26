import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center p-3">
            <h1 className="header-title">Let's Make Your Dream Film</h1>
            <h5 className="text-muted">
                Pick your favourite actor and make your dream true!
            </h5>
            <h4>Total Budget: 100 Million</h4>
        </div>
    );
};

export default Header;
