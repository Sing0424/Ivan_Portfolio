import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a className='active' href='#'>Home</a></li>
                    <li><a href='#'>Resume</a></li>
                    <li><a href='#'>Collection</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}