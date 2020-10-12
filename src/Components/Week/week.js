import React, { useState } from 'react';
import Card from '../Card/card';
import weekModule from './week.module.css';

const Week = ({ data }) => {
    const [days, setDays] = useState(null);
    const [modal, setModal] = useState(false)
    let day = '';
    return (
        <>
            <div className={weekModule.wrapper} >
                {
                    data.map((item, index) => {
                        if (day !== item.dt_txt.slice(0, 10).split("-").reverse().join("-")) {
                            day = item.dt_txt.slice(0, 10).split("-").reverse().join("-");
                            return (
                                <div key={index}>
                                    <Card
                                        modal={modal}
                                        setModal={setModal}
                                        setDays={setDays}
                                        data={item}
                                    />
                                </div>
                            )
                        }
                    })
                }
            
            </div>
            <div className={weekModule.wrapper} >
            {
                modal && 
                data.map((item,index) => {
                    if(days === item.dt_txt.slice(0, 10)){
                        return(
                            <div key={index}>
                                <Card
                                data={item}
                                modal={modal}
                                setModal={setModal}
                            />
                            </div>
                        )
                    }
                })
            }
            </div>

        </>
    )
}

export default Week;