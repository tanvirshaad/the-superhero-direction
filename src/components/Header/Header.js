import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center py-3">
            <h3 className="">Let's Make Your Dream Film</h3>
            <h5 className="text-muted">
                Pick your favourite actor and make your dream true!
            </h5>
            <h4>Total Budget: 100 Million</h4>
        </div>
    );
};

export default Header;
