import React from "react";
import { Cards, Charts, CountryPicker } from "./app/components";
import styles from "./App.module.css";

import { FetchedCovidData } from "./app/services";

const App: React.FC = () => {
  const [cardInfo, setCardsInfo] = React.useState<any>("");
  React.useEffect(() => {
    (async () => {
      const { confirmed, recovered, deaths, lastUpdate } =
        await FetchedCovidData(null);
      const data = { confirmed, recovered, deaths, lastUpdate };
      setCardsInfo(data);
    })();
  }, []);

  async function handleCountryChange(country: string) {
    try {
      const { confirmed, recovered, deaths, lastUpdate } =
        await FetchedCovidData(country);
      const data = { confirmed, recovered, deaths, lastUpdate };
      setCardsInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.App}>
      <Cards {...cardInfo} />
      <CountryPicker handleCountry={handleCountryChange} />
      <Charts />
    </div>
  );
};

export default App;
