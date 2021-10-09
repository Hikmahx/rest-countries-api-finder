import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([
    {
      name: {
        common: 'Germany',
        official: 'Federal Republic of Germany',
        nativeName: {
          deu: {
            official: 'Bundesrepublik Deutschland',
            common: 'Deutschland',
          },
        },
      },
      tld: ['.de'],
      cca2: 'DE',
      ccn3: '276',
      cca3: 'DEU',
      cioc: 'GER',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: { EUR: { name: 'Euro', symbol: '€' } },
      idd: { root: '+4', suffixes: ['9'] },
      capital: ['Berlin'],
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      languages: { deu: 'German' },
      translations: {
        ces: { official: 'Spolková republika Německo', common: 'Německo' },
        deu: { official: 'Bundesrepublik Deutschland', common: 'Deutschland' },
        est: { official: 'Saksamaa Liitvabariik', common: 'Saksamaa' },
        fin: { official: 'Saksan liittotasavalta', common: 'Saksa' },
        fra: {
          official: "République fédérale d'Allemagne",
          common: 'Allemagne',
        },
        hrv: { official: 'Njemačka Federativna Republika', common: 'Njemačka' },
        hun: {
          official: 'Német Szövetségi Köztársaság',
          common: 'Németország',
        },
        ita: {
          official: 'Repubblica federale di Germania',
          common: 'Germania',
        },
        jpn: { official: 'ドイツ連邦共和国', common: 'ドイツ' },
        kor: { official: '독일 연방 공화국', common: '독일' },
        nld: { official: 'Bondsrepubliek Duitsland', common: 'Duitsland' },
        per: { official: 'جمهوری فدرال آلمان', common: 'آلمان' },
        pol: { official: 'Republika Federalna Niemiec', common: 'Niemcy' },
        por: { official: 'República Federal da Alemanha', common: 'Alemanha' },
        rus: {
          official: 'Федеративная Республика Германия',
          common: 'Германия',
        },
        slk: { official: 'Nemecká spolková republika', common: 'Nemecko' },
        spa: { official: 'República Federal de Alemania', common: 'Alemania' },
        swe: { official: 'Förbundsrepubliken Tyskland', common: 'Tyskland' },
        urd: { official: 'وفاقی جمہوریہ جرمنی', common: 'جرمنی' },
        zho: { official: '德意志联邦共和国', common: '德国' },
      },
      latlng: [51.0, 9.0],
      landlocked: false,
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      area: 357114.0,
      demonyms: {
        eng: { f: 'German', m: 'German' },
        fra: { f: 'Allemande', m: 'Allemand' },
      },
      flag: '\uD83C\uDDE9\uD83C\uDDEA',
      maps: {
        googleMaps: 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6',
        openStreetMaps: 'https://www.openstreetmap.org/relation/51477',
      },
      population: 83240525,
      gini: { 2016: 31.9 },
      flags: {
        svg: 'https://flagcdn.com/de.svg',
        png: 'https://flagcdn.com/w320/de.png',
      },
    },
  ]);

  return (
    <div className="App bg-very-light-gray-light dark:bg-very-dark-blue-dark">
      <Navbar/>
      <Main countries = {countries} setCountries={setCountries}/>
    </div>
  );
}

export default App;
