import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const requestApi = {
	request(success: boolean) {
		return instance.post<ResponseType>('', {success}).then(response => response.data)
	}
}

