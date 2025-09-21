import type { Dispatch, SetStateAction } from "react";
import type { Country } from "./countryData";
import Icon from "./Icon";
import styles from "./Countries.module.css";

type CountryIconsProps = {
  countries: Country[];
  currentCountryIndex: number;
  setCurrentCountryIndex: Dispatch<SetStateAction<number>>;
};

const CountryIcons = ({ countries, currentCountryIndex, setCurrentCountryIndex }: CountryIconsProps) => {
  return (
    <div className={styles.countrySVGDiv}>
      {countries.map((country, index) => {
        return (
          <div key={index}>
            <Icon
              country={country}
              index={index}
              currentCountryIndex={currentCountryIndex}
              setCurrentCountryIndex={setCurrentCountryIndex}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CountryIcons;