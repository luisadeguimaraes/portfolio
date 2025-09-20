


import { useState } from "react";
import styles from "./Countries.module.css";

import countryData from "./countryData.ts"; // Assuming your data file is in the same directory
import CountryPics from "./CountryPics.tsx";

const Countries = () => {

      const [currentCountryIndex, setCurrentCountryIndex] = useState(0);


  return (
    <div className={styles.img6828Parent}>
      <CountryPics country={countryData[currentCountryIndex]} />
     
    </div>
  );
};

export default Countries;



//  {countryData.map((country, index) => {
//         return (
          
//         );
//       })}






// <div className={styles.img6828Parent}>
// 	<img className={styles.img6828Icon} alt="" />
// 	<img className={styles.img3997Icon} alt="" />
// 	<div className={styles.countries}>
// 			<div className={styles.brazilSvgrepocom}>
// 				<img className={styles.vectorIcon} alt="" />
// 				<img className={styles.img6828ParentVectorIcon} alt="" />
// 				<img className={styles.vectorIcon2} alt="" />
// 				<img className={styles.groupIcon} alt="" />
// 			</div>
// 			<div className={styles.component16}>
// 				<img className={styles.clipPathGroup} alt="" />
// 			</div>
// 			<div className={styles.component17}>
// 				<img className={styles.component17Child} alt="" />
// 			</div>
// 			<div className={styles.component18}>
// 				<img className={styles.component18Child} alt="" />
// 			</div>
// 			<div className={styles.flagForFlagSloveniaSvgrepo}>
// 				<img className={styles.vectorIcon3} alt="" />
// 				<img className={styles.vectorIcon4} alt="" />
// 				<img className={styles.vectorIcon5} alt="" />
// 				<img className={styles.vectorIcon6} alt="" />
// 				<img className={styles.vectorIcon7} alt="" />
// 				<img className={styles.vectorIcon8} alt="" />
// 				<img className={styles.vectorIcon9} alt="" />
// 			</div>
// 	</div>
// </div>