


import { useEffect, useState } from "react";
import styles from "./Countries.module.css";

import countryData from "./countryData.ts"; // Assuming your data file is in the same directory
import CountryPics from "./CountryPics.tsx";
import CountryIcons from "./CountryIcons.tsx"



const Countries = () => {

      const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

      useEffect(() => {
      console.log(currentCountryIndex)

      }, [])

  return (
    <div className={styles.img6828Parent}>
      <CountryPics currentCountryIndex={currentCountryIndex} country={countryData[currentCountryIndex]} />

      <CountryIcons 
      countries={countryData} 
        currentCountryIndex={currentCountryIndex}
          setCurrentCountryIndex={setCurrentCountryIndex}
      />
      
     
    </div>
  );
};

export default Countries;

