import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./MainHeader.module.css";
import leftArrow from "../../images/left-arrow.svg";
import mic from "../../images/mic-icon.svg";
import settings from "../../images/settings-icon.svg";

const MainHeader = ({ title }) => {
  return (
    <header>
      <nav className={classes.nav}>
        {title === "Country Info" && (
          <div>
            <Link to="/">
              <img src={leftArrow} alt="Back to home page" />
            </Link>
          </div>
        )}
        <div>{title}</div>
        <div>
          <img src={mic} alt="Mic" />
          <img src={settings} alt="Settings" />
        </div>
      </nav>
    </header>
  );
};

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
