import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './InputTextForm.module.scss'
import {UseFormRegister} from "react-hook-form";
import {TSettingData} from "../../../pages/Settings/Settings";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    register: UseFormRegister<TSettingData>
    name: any
    type?: string

}

const InpuTextForm: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        name,
        register,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : ''}  ${className} ${s.superInput}`

    return (
        <>
            <input
                type={type ? type : 'text'}
                {...register(name)}

                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                defaultValue={restProps.defaultValue}


            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    );
};

export default InpuTextForm;
