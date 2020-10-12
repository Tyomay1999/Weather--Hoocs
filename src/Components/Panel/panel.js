import React from 'react';
import Week from '../Week/week';
import panelModule from './panel.module.css';
const Panel = ({ data }) => {
    const { city, list } = data
    const { coord, country, name } = city;
    const {dt_txt,main,wind,weather} = list[0];
        return (
        <div>
            <div className={panelModule.container} id={panelModule.wrapper}>
                <div className={panelModule.container_fluid} id={panelModule.current_weather}>
                    <div className={panelModule.row}>
                        <div className={panelModule.head}>
                            <p id={panelModule.tempDescription}>
                                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt='' />
                            </p>
                            <div>
                            <h6 id={panelModule.localDate}>{country}</h6>
                                <img src={`https://www.countryflags.io/${country}/flat/64.png`} alt=''/>
                            </div>

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
            <Week
                data={list}
            />
        </div>
    )
}

export default Panel;