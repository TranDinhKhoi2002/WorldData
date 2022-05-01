import PropTypes from "prop-types";
import { Fragment } from "react";
import Countries from "../components/Countries/Countries";
import MainHeader from "../components/NavBar/MainHeader";

const HomePage = (props) => {
  return (
    <Fragment>
      <MainHeader title="World Data" />
      <Countries countries={props.countries} />
    </Fragment>
  );
};

HomePage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomePage;
