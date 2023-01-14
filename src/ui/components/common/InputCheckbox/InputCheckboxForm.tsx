import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './InputCheckboxForm.module.scss'
import {CheckboxLabel} from "./styles";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    spanClassName?: string
    checked?: boolean
    // register?: UseFormRegister<TSettingData>
    name?: string

}

const InputCheckboxForm: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress,
        className, spanClassName,
        name,
        // register,
        children,
        checked,
        ...restProps
    }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const finalInputClassName = ` ${className} ${s.superInput}`

    return (
        <CheckboxLabel>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                checked={checked}
                className={finalInputClassName}
                defaultChecked={restProps.defaultChecked}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </CheckboxLabel>
    );
};

export default InputCheckboxForm;
