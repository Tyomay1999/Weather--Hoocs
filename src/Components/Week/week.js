import React from 'react';
import Card from '../Card/card';
import weekModule from './week.module.css';

const Week = ({ data }) => {
    let day = '';
    return (
        <div className={weekModule.wrapper} key={Math.floor(Math.random())}>

            {
                data.map((item,index)  => {
                    if (day !== item.dt_txt.slice(0, 10).split("-").reverse().join("-")) {
                        day = item.dt_txt.slice(0, 10).split("-").reverse().join("-");
                        return (
                            <div key={index}>
                            <Card
                                data={item}
                            />
                            </div>
                        )
                    } 
                })
            }

        </div>
    )
}

export default Week;