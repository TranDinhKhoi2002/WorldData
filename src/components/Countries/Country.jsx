import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLoading } from "../../redux/loading-slice";

import classes from "./Country.module.css";

const Country = (props) => {
  const dispatch = useDispatch();

  return (
    <li
      className={classes.country}
      onClick={() => dispatch(setIsLoading(true))}
    >
      <Link to={`/${props.name}`}>
        <figure>
          <img src={props.flag} alt="flag" />
          <figcaption>{props.name}</figcaption>
        </figure>
      </Link>
    </li>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
