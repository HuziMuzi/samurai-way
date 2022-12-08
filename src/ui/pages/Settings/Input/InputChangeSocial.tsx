import React from 'react';
import {TSettingData} from "../Settings";
import {UseFormRegister} from "react-hook-form";


export type TPropsInputSocial = {
    icon : JSX.Element
    register : UseFormRegister<TSettingData>
    name: any
    value: string
}

export const InputChangeSocial = ({icon, register, name, ...props}: TPropsInputSocial) => {
    return (
        <div>
                {icon}
                <input {...register(name)} defaultValue={props.value}/>

        </div>
    );
};
