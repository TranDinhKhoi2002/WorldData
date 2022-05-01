import { Fragment } from "react";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import MainHeader from "../components/NavBar/MainHeader";

const DetailsPage = () => {
  return (
    <Fragment>
      <MainHeader title="Country Info" />
      <CountryInfo />
    </Fragment>
  );
};

export default DetailsPage;
