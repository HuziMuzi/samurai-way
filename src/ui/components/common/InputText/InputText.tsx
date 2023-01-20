import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import {FieldError, UseFormRegister} from "react-hook-form";
import {TSettingData} from "../../../pages/Settings/Settings";
import {CustomInput, InputWrapper} from "./styled";
import {TextError} from "../UiBox/styled";

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: FieldError
    spanClassName?: string
    register?: UseFormRegister<TSettingData>
    name?: string
}

export const InputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        name,
        register,
        ...restProps
    }) => {

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

    return (
        <InputWrapper>
            <CustomInput
                type={type ? type : 'text'}
                value={restProps.value || ''}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                error={error}
                placeholder={restProps.placeholder}
            />
            {error && <TextError>{error ? error.message : ''}</TextError>}
        </InputWrapper>
    );
};

