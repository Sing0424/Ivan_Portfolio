import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [homeActive, setHomeActive] = useState("active");
  const [resumeActive, setResumeActive] = useState("inactive");
  const [collectionActive, setCollectionActive] = useState("inactive");
  const [contactActive, setContactActive] = useState("inactive");

  const handleHome = () => {
    setHomeActive("active");
    setResumeActive("inactive");
    setCollectionActive("inactive");
    setContactActive("inactive");
  };
  const handleResume = () => {
    setHomeActive("inactive");
    setResumeActive("active");
    setCollectionActive("inactive");
    setContactActive("inactive");
  };
  const handleCollection = () => {
    setHomeActive("inactive");
    setResumeActive("inactive");
    setCollectionActive("active");
    setContactActive("inactive");
  };
  const handleContact = () => {
    setHomeActive("inactive");
    setResumeActive("inactive");
    setCollectionActive("inactive");
    setContactActive("active");
  };

  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <Link
              onClick={handleHome}
              className={homeActive}
              to="/Ivan_Portfolio"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleResume}
              className={resumeActive}
              to="/Ivan_Portfolio/Resume"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCollection}
              className={collectionActive}
              to="/Ivan_Portfolio/Collection"
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              onClick={handleContact}
              className={contactActive}
              to="/Ivan_Portfolio/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
