import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
            <div >
                <img width={'150px'}
                     src="https://www.thehedgescompany.com/hedges/wp-content/uploads/2016/04/Man-at-computer-no-attribution.jpg"
                     alt=""/>
                <div className={s.descriptionBlock}>
                    <h2 className={s.name}>Andrei D</h2>
                    <p>Date of Birth 2 january</p>
                    <p>City: Minsk</p>
                    <p>Education: BSU'11</p>
                    <p>Web Site: https://it-kamasutra.com</p>
                </div>
            </div>
    );
};

