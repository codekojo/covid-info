import React from "react";
import { NativeSelect, FormControl, InputLabel } from "@mui/material";
import { fetchCountries } from "../../services";

interface CountryProps {
  handleCountry: React.ReactNode;
}

const CountryPicker: React.FC<any | CountryProps> = ({ handleCountry }) => {
  const [countriesList, setCountriesList] = React.useState<[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { countries } = await fetchCountries();
        const modifiedData = countries.map((e: any) => {
          return {
            name: e.name,
          };
        });
        setCountriesList(modifiedData);
      } catch (error) {}
    })();
  }, []);
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        country
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "country",
        }}
        onChange={(e: any) => handleCountry(e.target.value)}
      >
        {countriesList.map((country: any, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
