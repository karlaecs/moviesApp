/*global process*/
import axios from 'axios';

const {REACT_APP_BASE_URL, REACT_APP_API_KEY} = process.env;

const API = axios.create({
  baseURL: REACT_APP_BASE_URL,
  responseType: 'json',
});

const getApiKey = () => REACT_APP_API_KEY;

const endpoints = {
  movie: {
    upcoming: {
      list: page => `upcoming?api_key=${REACT_APP_API_KEY}&page=${page}`,
    },
  },
};

export {API, getApiKey, endpoints};
