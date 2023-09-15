//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.
import axios from 'axios';

const get = (url = '', data = {}, config = {}) => {
	return axios(url, data, config);
};

const HttpClient = {
	get,
};

export { HttpClient };
