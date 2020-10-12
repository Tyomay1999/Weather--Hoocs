import React from 'react';
import Cards from '../Cards/cards';
import panelModule from './panel.module.css';
const Panel = ({ data }) => {
    const { city, list } = data
    const { coord, country, name } = city;
    console.log("Cards -> coord", coord)
    console.log("Cards -> list", list[0])
    const {dt_txt,main,weather,wind} = list[0];
    console.log("Cards -> weather", weather)
    console.log("Cards -> main", main)
    console.log("Cards -> dt_txt", dt_txt.slice(11,16))//09:00
    console.log("Cards -> dt_txt", dt_txt.slice(0,10).split("-").reverse().join("-"))//2020-10-12
        return (
        <div>
            <div className={panelModule.container} id={panelModule.wrapper}>
                <div className={panelModule.container_fluid} id={panelModule.current_weather}>
                    <div className={panelModule.row}>
                        <div className={panelModule.head}>
                            <p id={panelModule.tempDescription}>iconeTemp</p>
                            <h6 id={panelModule.localDate}> {country} </h6>

                        </div>
                        <div className={panelModule.descrip}>
                            <h5 id={panelModule.cityName}>
                                <span> {name} </span>
                            </h5>
                            <h5 id={panelModule.localTime}> {dt_txt.slice(0,10).split("-").reverse().join("-")} </h5>
                        </div>

                        <div className={panelModule.temp} >
                            <div className={panelModule.row}>
                                <i className={panelModule.wi} id={panelModule.main_icon} ></i>
                                <div>
                                    <span id={panelModule.mainTemperature}>{main.temp}°C</span>

                                </div>
                            </div>
                        </div>

                        <div className={panelModule.humWid}>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Humidity: <span id={panelModule.humidity}>{main.humidity}</span>%</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Wind: <span id={panelModule.wind}> {wind.speed} </span> m/s</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Lat: <span id={panelModule.mainTempHot}>{coord.lat}</span>°</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Lon: <span id={panelModule.mainTempLow}>{coord.lon}</span>°</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Cards
                data={list}
            />
        </div>
    )
}

export default Panel;