import type { Dispatch, SetStateAction } from "react";
import styles from "./Countries.module.css";
import type { Country } from "./countryData";

type IconProps = {
  country: Country;
  index: number;
  currentCountryIndex: number;
  setCurrentCountryIndex: Dispatch<SetStateAction<number>>;
};

const Icon = ({ index, country, currentCountryIndex, setCurrentCountryIndex }: IconProps) => {
  function handleClick() {
    setCurrentCountryIndex(index);
  }

  return (
    <button onClick={handleClick}>
      <img
        className={currentCountryIndex === index ? styles.activeFlag : styles.flag}
        src={currentCountryIndex === index ? country.flag : country.notSelectedFlag}
        alt={`Flag for ${country.country}`}
      />
    </button>
  );
};

export default Icon;