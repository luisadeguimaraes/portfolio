// The 'id' property is a unique identifier, and 'country' is the display name.
export type Country = {
    id: string; 
    country: string;
    picture: string;
};

const countryData: Country[] = [
    {
        id: 'brazil',
        country: 'Brazil',
        picture: '/CountryPictures/brazil.jpg',
    },
    {
        id: 'vietnam',
        country: 'Vietnam',
        picture: '/CountryPictures/vietnam.jpg',
    },
    {
        id: 'slovenia',
        country: 'Slovenia',
        picture: '/CountryPictures/slovenia.jpg',
    },
    {
        id: 'colombia',
        country: 'Colombia',
        picture: '/CountryPictures/colombia.jpg',
    },
    {
        id: 'peru',
        country: 'Peru',
        picture: '/CountryPictures/peru.jpg',
    },
];

export default countryData;