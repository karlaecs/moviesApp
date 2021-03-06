import axios from 'axios';

import {
  REACT_APP_BASE_URL,
  REACT_APP_API_KEY,
  REACT_APP_BASE_URL_IMAGE,
} from 'react-native-dotenv';

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  responseType: 'json',
});

const getApiKey = () => REACT_APP_API_KEY;
const getBaseUrlImage = REACT_APP_BASE_URL_IMAGE;

const endpoints = {
  movies: {
    upcoming: {
      list: ({page}) =>
        `${REACT_APP_BASE_URL}movie/upcoming?api_key=${REACT_APP_API_KEY}&page=${page}`,
      search: ({query}) =>
        `${REACT_APP_BASE_URL}search/movie?api_key=${REACT_APP_API_KEY}&query=${query}`,
    },
    genres: `/genre/movie/list?api_key=${REACT_APP_API_KEY}`,
  },
};

export {API, getApiKey, endpoints, getBaseUrlImage};
