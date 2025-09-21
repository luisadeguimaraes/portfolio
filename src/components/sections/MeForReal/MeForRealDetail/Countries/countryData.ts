export type Country = {
  country: string;
  flag: string;
  notSelectedFlag: string;
  picture: string;
};

const countryData: Country[] = [
  {
    country: 'brazil',
    flag: '/flags/brazil-flag.svg',
    notSelectedFlag: '/flags/brazil-flag-not-selected.svg',
    picture: '/CountryPictures/brazil.jpg',
  },
  {
    country: 'vietnam',
    flag: '/flags/vietnam-flag.svg',
    notSelectedFlag: '/flags/vietnam-flag-not-selected.svg',
    picture: '/CountryPictures/vietnam.jpg',
  },
  {
    country: 'slovenia',
    flag: '/flags/slovenia-flag.svg',
    notSelectedFlag: '/flags/slovenia-flag-not-selected.svg',
    picture: '/CountryPictures/slovenia.jpg',
  },
  {
    country: 'colombia',
    flag: '/flags/colombia-flag.svg',
    notSelectedFlag: '/flags/colombia-flag-not-selected.svg',
    picture: '/CountryPictures/colombia.jpg',
  },
  {
    country: 'peru',
    flag: '/flags/peru-flag.svg',
    notSelectedFlag: '/flags/peru-flag-not-selected.svg',
    picture: '/CountryPictures/peru.jpg',
  },
];

export default countryData;

