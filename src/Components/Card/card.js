import React from 'react';
import cardModule from './card.module.css';
const Card = ({setDays,data,setModal,modal}) => {
    const {dt_txt,weather,main} = data
    return (
        <div className={cardModule.card} onClick={() => {if(setDays){setDays(dt_txt.slice(0, 10));setModal(!modal)}else{setModal(!modal)}}}>
            <div className={cardModule.box}>
                <p className={cardModule.date}> {dt_txt.slice(0, 10).split("-").reverse().join("-")} </p>
                <p className={cardModule.date}>{dt_txt.slice(11, 16)}</p>
                <div className={`${cardModule.wave} ${cardModule._one}`}></div>
                <div className={`${cardModule.wave} ${cardModule._two}`}></div>
                <div className={`${cardModule.wave} ${cardModule._three}`}></div>
                <div className={cardModule.weathercon}>
                    <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt='' />
                </div>
                <div className={cardModule.info}>
                    <h2 className={cardModule.location}>{weather[0].description}</h2>
                    <h1 className={cardModule.temp}>{main.temp} &deg;C</h1>
                </div>
            </div>
        </div>
    )
}
export default Card;