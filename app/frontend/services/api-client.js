let axios
export function setClient (newClient) {
    axios = newClient
}

const ApiClient = {
    getOptions (token) {
        if (!token) { return {} }
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    },

    getParams (parms) {
        if (!parms) { return {} }
        return {
            params
        }
    },

    // dev utils
    sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    async symulateApiConnection (responseData, ms = 1000) {
        await this.sleep(ms)
        return new Promise((resolve, reject) => {
            resolve({ data: responseData })
        })
    }
}

export default ApiClient
    