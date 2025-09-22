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
   <div className={styles.imageContainer}> {/* Add a class to this div */}
      <img
        className={styles.activePicture}
        src={country.picture}
        alt={`A picture from ${country.country}`}
      />
      <img
        className={styles.backgroundPicture}
        src={country.picture}
        alt={`A picture from ${country.country}`}
      />
    </div>
  );
};

export default CountryPics;