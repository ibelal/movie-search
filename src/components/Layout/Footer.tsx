import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../common/SocialMediaLinks";
import classes from "./MainNavigation.module.css";

const Footer = () => {
  const socialLinks = {
    linkedin_id: "imdbelal",
    github_id: "ibelal",
  };
  return (
    <footer className=" footer mt-auto text-white text-muted">
      <nav className="navbar navbar-expand-lg nav-footer">
        <div className="container footer">
          <div className={`${classes.navbar}`}>
            <h4>
              <Link to="/" className="navbar-brand">
                <i className="fa-solid fa-clapperboard"></i> &nbsp; R&B Media
              </Link>
            </h4>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="navbar-text">
                <small>
                  Data porvided by&nbsp;
                  <a href="https://www.themoviedb.org/">TMDb.</a>
                </small>
              </span>
            </li>
          </ul>
          <div className="navbar-text text-center socialinks">
            <small>
              <SocialMediaLinks links={socialLinks} color="text-white" />
            </small>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
