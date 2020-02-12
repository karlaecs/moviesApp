/*global process*/
import axios from 'axios';

import {REACT_APP_BASE_URL, REACT_APP_API_KEY} from 'react-native-dotenv';

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  responseType: 'json',
});

const getApiKey = () => REACT_APP_API_KEY;

const endpoints = {
  movie: {
    upcoming: {
      list: ({page}) =>
        `${REACT_APP_BASE_URL}movie/upcoming?api_key=${REACT_APP_API_KEY}&page=${page}`,
    },
  },
};

export {API, getApiKey, endpoints};
