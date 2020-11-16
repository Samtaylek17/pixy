import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 50jJpjvxcnGXxa_HsUBin6hVAEf45Afe7ORSuYCgVTk',
	},
});
