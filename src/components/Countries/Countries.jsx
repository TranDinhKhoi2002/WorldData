import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Country from "./Country";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Countries.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../redux/loading-slice";

const Countries = (props) => {
  const [input, setInput] = useState("");
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  const filteredData = props.countries.filter((country) => {
    const data = Object.keys(country).some((key) => {
      const checkInput = country[key]
        .toLowerCase()
        .includes(input.toLowerCase());
      return checkInput;
    });

    return data;
  });

  return (
    <section>
      <input
        type="search"
        className={classes.search}
        placeholder="Search by country name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <ul className={classes.listCountries}>
        {filteredData.map((country) => (
          <Country
            key={country.countryName}
            name={country.countryName}
            flag={country.flag}
          />
        ))}
      </ul>
    </section>
  );
};

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Countries;
