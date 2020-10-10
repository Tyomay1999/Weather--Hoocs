import React from 'react';
import cardsModule from './cards.module.css';
const Cards = () => {
    return (
        <div>
            <ul className={cardsModule.grid_container}>
                <li className={cardsModule.grid_item}>
                    <div className={`${cardsModule.card} ${cardsModule.card_night}`}>
                        <div className={cardsModule.night}></div>
                    </div>
                    <div className={cardsModule.status}>
                        <p>71 &#8457;</p>
                        <p>Clear skies</p>
                    </div>
                </li>
                <li className={cardsModule.grid_item}>
                    <div className={`${cardsModule.card} ${cardsModule.card_rain}`}>
                        <div className={cardsModule.rain}></div>
                    </div>
                    <div className={cardsModule.status}>
                        <p>71 &#8457;</p>
                        <p>Showers</p>
                    </div>
                </li>
                <li className={cardsModule.grid_item}>
                    <div className={`${cardsModule.card} ${cardsModule.card_snow}`}>
                        <div className={cardsModule.snow}></div>
                    </div>
                    <div className={cardsModule.status}>
                        <p>71 &#8457;</p>
                        <p>Light flurry</p>
                    </div>
                </li>
                <li className={cardsModule.grid_item}>
                    <div className={`${cardsModule.card} ${cardsModule.card_storm}`}>
                        <div className={cardsModule.storm}></div>
                    </div>
                    <div className={cardsModule.status}>
                        <p>71 &#8457;</p>
                        <p>Thunderstorms</p>
                    </div>
                </li>
                <li className={cardsModule.grid_item}>
                    <div className={`${cardsModule.card} ${cardsModule.card_sunny}`}>
                        <div className={cardsModule.sunny}></div>
                    </div>
                    <div className={cardsModule.status}>
                        <p>71 &#8457;</p>
                        <p>Mostly sunny</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Cards;