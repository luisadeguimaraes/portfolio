import styles from "./Countries.module.css";
import type { Country } from "./countryData";


type CountryPicsProps = {
  country: Country;
  currentCountryIndex: number;
 
};

const CountryPics = ({ country, currentCountryIndex }: CountryPicsProps) => {


  console.log('here', currentCountryIndex, country);

  // The rest of your code is correct

  return (
    <div>
      <img
        className={styles.activePicture}
        src={country.picture}
        alt={`A picture from ${country.country}`}
      />
    </div>
  );
};

export default CountryPics;