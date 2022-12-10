import React from 'react';
import {TSettingData} from "../Settings";
import {UseFormRegister} from "react-hook-form";
import InpuTextForm from "../../../components/common/InputText/InpuTextForm";
import style from './InputChangeSocial.module.scss'

export type TPropsInputSocial = {
    icon : JSX.Element
    register : UseFormRegister<TSettingData>
    name: any
    value: string
}

export const InputChangeSocial = ({icon, register, name, ...props}: TPropsInputSocial) => {
    return (
        <div className={style.InputChangeSocial}>
                {icon}
                <InpuTextForm register={register} name={name} defaultValue={props.value}/>

        </div>
    );
};
