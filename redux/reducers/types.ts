export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld: [string];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  currencies: {
    USD: {
      name: string;
      symbol: string;
    };
  };
  capital: [string];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
  };
  borders: string[];
  area: number;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  fifa: string;
  continents: [string];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}[];

export type Countries = Country | [];
