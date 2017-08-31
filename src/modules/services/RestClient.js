import f from 'react-native-fetch-polyfill'

const BASE_URL = 'http://localhost:3000/'
const TIMEOUT = 40000
const Methods = {
    POST: 'POST',
    GET: 'GET'
}

class RestClient {

    constructor() {
        this.interceptors = [
            logInterceptor
        ]
    }

    makeRequest(endpoint, params, method) {
        const url = BASE_URL + endpoint

        this.interceptors.forEach(interceptor => interceptor.preRequest(url, method))

        const options = {
            method: method,
            body: params
        }

        const request = this.resolveRequest(url, params, method)
        return request
            .then(response => response.json())
            .then(data => {
                return this.interceptors.reduce((result, interceptor) =>
                    interceptor.postRequest(url, data), data)
            })
            .catch(error => {
                throw this.interceptors.reduce((val, interceptor) =>
                    interceptor.postRequest(url, null, error), error)
            })
    }

    resolveRequest(url, params, method) {
        if (method === Methods.POST) {
            return this.post(url, params)
        }
        return this.get(url, params)
    }

    get(url, params) {
        return f(url, { timeout: TIMEOUT })
    }

    post(url, params) {
        return f(url, {
            method: Methods.POST,
            body: params,
            timeout: TIMEOUT
        })
    }

    // ===========================
    // API LIST
    // ===========================

    fetchSummary() {
        return this.makeRequest('summary')
    }

    login(user, pass) {
        const params = JSON.stringify({
            username: user,
            password: pass
        })
        return this.makeRequest('login', params, Methods.GET)
    }

    forgotPassword(emailOrPhone) {
        const params = JSON.stringify({
            PhoneNumber: emailOrPhone
        })
        return this.makeRequest('forgotpassword', params, Methods.POST)
    }
}

const logInterceptor = {
    preRequest: (url, method) => console.log('Requesting =>', method, url),
    postRequest: (url, response, error) => {
        if (error) {
            console.log('Response Error =>', url, error)
            return error
        } else {
            console.log('Response Success =>', url, response)
            return response
        }
    }
}

export default RestClient