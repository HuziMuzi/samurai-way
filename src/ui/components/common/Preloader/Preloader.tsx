import React from 'react';
import style from './Preloader.module.css'
import {LoaderIcon} from "../../../assets/LoaderIcon/LoaderIcon";

export const Preloader = () => {
    return (
        <div  className={style.golbalPreloader}>
            <LoaderIcon/>
        </div>
    );
};

