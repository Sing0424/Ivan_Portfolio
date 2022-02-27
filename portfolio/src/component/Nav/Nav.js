import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [homeActive, setHomeActive] = useState('active');
    const [resumeActive, setResumeActive] = useState('unactive');
    const [collectionActive, setCollectionActive] = useState('unactive');
    const [contactActive, setContactActive] = useState('unactive');

    const handleHome = () => {
        setHomeActive('active')
        setResumeActive('unactive')
        setCollectionActive('unactive')
        setContactActive('unactive')
    }
    const handleResume = () => {
        setHomeActive('unactive')
        setResumeActive('active')
        setCollectionActive('unactive')
        setContactActive('unactive')
    }
    const handleCollection = () => {
        setHomeActive('unactive')
        setResumeActive('unactive')
        setCollectionActive('active')
        setContactActive('unactive')
    }
    const handleContact = () => {
        setHomeActive('unactive')
        setResumeActive('unactive')
        setCollectionActive('unactive')
        setContactActive('active')
    }

    return (
        <div className='navBar'>
            <nav>
                <ul>
                    <li><Link onClick={handleHome} className={homeActive} to="/Ivan_Portfolio">Home</Link></li>
                    <li><Link onClick={handleResume} className={resumeActive} to="/Ivan_Portfolio/Resume">Resume</Link></li>
                    <li><Link onClick={handleCollection} className={collectionActive} to="/Ivan_Portfolio/Collection">Collection</Link></li>
                    <li><Link onClick={handleContact} className={contactActive} to="/Ivan_Portfolio/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}