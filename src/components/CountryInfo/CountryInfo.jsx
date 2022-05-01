import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getCountryInfoFromApi from "../../redux/country-info";
import { setIsLoading } from "../../redux/loading-slice";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./CountryInfo.module.css";

const CountryInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryInfo = useSelector((state) => state.country.countryInfo);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const { countryName } = params;

  useEffect(() => {
    dispatch(getCountryInfoFromApi(countryName));

    const timer = setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, countryName]);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Fragment>
      {countryInfo.length > 0 && (
        <section className={classes.detailsSection}>
          <div className={classes.detailsTop}>
            <img src={countryInfo[countryInfo.length - 1].flag} alt="flag" />
            <div>
              <h2>{countryName}</h2>
              <h4>{countryInfo[countryInfo.length - 1].region}</h4>
            </div>
          </div>
          <ul className={classes.detailsBottom}>
            <li>
              <span>🎌 Official Name:</span>
              <p>{countryInfo[countryInfo.length - 1].official}</p>
            </li>
            <li>
              <span>🌆 Capital:</span>
              <p>{countryInfo[countryInfo.length - 1].capital}</p>
            </li>
            <li>
              <span>⭕ Area:</span>
              <p>{+countryInfo[countryInfo.length - 1].area} km2</p>
            </li>
            <li>
              <span>🤼 Population:</span>
              <p>
                {(
                  +countryInfo[countryInfo.length - 1].population / 1000000
                ).toFixed(1)}{" "}
                million
              </p>
            </li>
            <li>
              <span>⏳ Time Zone:</span>
              <p>{countryInfo[countryInfo.length - 1].timezone}</p>
            </li>
          </ul>
        </section>
      )}
    </Fragment>
  );
};

export default CountryInfo;
