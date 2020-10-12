import React, { useEffect, useState } from 'react';
import featching from '../../featching';
import Panel from '../Panel/panel';
import Header from '../Header/header';

const List = () => {
    const [countryName, getCountryName] = useState(null);
    const [data, getData] = useState(null);
    useEffect(() => {
        featching(countryName,getData)
    },[countryName])
    return(
        <>
            <Header
                getCountryName={getCountryName}
            />
            {
                data && 
                <Panel
                    data={data}
                />
            }
        </>
    )
}
export default List;