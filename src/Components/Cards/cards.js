import React from 'react';
import cardModule from './cards.module.css'

const Cards = (prop) => {
    console.log("Cards -> prop", prop)
    return(
        <>
             <div className={cardModule.card}>
                <div className={cardModule.box}>
                    <div className={`${cardModule.wave} ${cardModule._one}`}></div>
                    <div className={`${cardModule.wave} ${cardModule._two}`}></div>
                    <div className={`${cardModule.wave} ${cardModule._three}`}></div>
                    <div className={cardModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardModule.info}>
                        <p className={cardModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;