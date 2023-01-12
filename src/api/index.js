import axios from "axios";

const API = axios.create({baseURL: 'https://restcountries.com/v3.1'});

export const getAllCountries = () => API.get('/all');

export const getCountryIndividually = fullName => API.get(`name/${fullName}?fullText=true`);

export const searchForCountry = name => API.get(`name/${name}`);
