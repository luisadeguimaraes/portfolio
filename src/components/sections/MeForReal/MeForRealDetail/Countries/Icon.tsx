import { useEffect, type Dispatch, type SetStateAction } from "react";
import styles from "./Countries.module.css";
import type { Country } from "./countryData";

import CountryFlagComponents from "./Flags/CountryFlagComponents"; 

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

    const isSelected = currentCountryIndex === index;

    // Use the id property to look up the component. 
    // This is safe because the id field is explicitly defined on the 'Country' type.
    const FlagComponent = CountryFlagComponents[country.id];



    if (!FlagComponent) {
        console.error(`Flag component for country ID '${country.id}' not found.`);
        return null;
    }

    return (
        <div onClick={handleClick} className={styles.countryButton} >
            <FlagComponent isSelected={isSelected} />
        </div>
    );
};

export default Icon;