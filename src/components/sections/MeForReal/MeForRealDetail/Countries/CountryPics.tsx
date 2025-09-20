import styles from "./Countries.module.css"





const CountryPics = ({country}) => {

    console.log(country.picture)

    return (
        <div >
             <img className={styles.activePicture} src={country.picture} alt={`A picture from ${country.picture}`} />
            
        </div>
    )
}

export default CountryPics


