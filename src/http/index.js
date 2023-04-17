import axios from 'axios'

export const API_URL = 'https://api.iex.cloud/v1/data/CORE'
export const API_TOKEN = 'pk_79ecd7e2d7a749c8862901ce3a5c5f0a'

const $api = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		token: API_TOKEN,
	},
})

export default $api
