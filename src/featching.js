import { API_URL, API_KEY } from './config'

const featching = (countryName, getData) => {
    if (countryName) {
        fetch(`${API_URL}forecast?q=${countryName}&APPID=${API_KEY}&units=metric`)
            .then(resp => {
                return resp.json().then(data => {
                    if (resp.ok) {
                        return data
                    } else {
                        return Promise.reject(data)
                    }
                })
            })
            .then(data => {
                return getData(data)
            })
    } else {
        window.navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(`${API_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
                .then(resp => {
                    return resp.json().then(data => {
                        if (resp.ok) {
                            return data
                        } else {
                            return Promise.reject(data)
                        }
                    })
                })
                .then(data => {
                    return getData(data)
                })
        })
    }
}
export default featching;