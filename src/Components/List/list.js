import React, { useEffect, useState } from 'react';
import Cards from '../Cards/cards';
import { API_KEY, API_URL } from '../../config';
import Header from '../Header/header';

const List = () => {
    const [countryName, getCountryName] = useState('');
    const [data, getData] = useState([]);
    useEffect(() => {
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
    },[countryName])
    return(
        <>
            <Header
                getCountryName={getCountryName}
            />
            <Cards
                data={data}
            />
        </>
    )
}
export default List;