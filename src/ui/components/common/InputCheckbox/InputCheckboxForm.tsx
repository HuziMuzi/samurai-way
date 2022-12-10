import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './InputCheckboxForm.module.scss'
import {UseFormRegister} from "react-hook-form";
import {TSettingData} from "../../../pages/Settings/Settings";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    spanClassName?: string
    register: UseFormRegister<TSettingData>
    name: any

}

const InputCheckboxForm: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress,
        className, spanClassName,
        name,
        register,
        children,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }


    // const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = ` ${className} ${s.superInput}`

    return (
        <label>
            <input
                type={'checkbox'}
                {...register(name)}
                onChange={onChangeCallback}
                className={finalInputClassName}
                defaultChecked={restProps.defaultChecked}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    );
};

export default InputCheckboxForm;
