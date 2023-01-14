import React from 'react';
import {TSettingData} from "../Settings";
import {UseFormRegister} from "react-hook-form";
import {InputText} from "../../../components/common/InputText/InputText";
import style from './InputChangeSocial.module.scss'

export type TPropsInputSocial = {
    icon : JSX.Element
    register : UseFormRegister<TSettingData>
    name: string
    value: string
}

export const InputChangeSocial = ({icon, register, name, ...props}: TPropsInputSocial) => {
    return (
        <div className={style.InputChangeSocial}>
                {icon}
                <InputText register={register} name={name} defaultValue={props.value}/>

        </div>
    );
};
