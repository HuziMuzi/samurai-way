import React from 'react';
import {Control, Controller} from 'react-hook-form'
import {InputText} from "../InputText/InputText";

type InputTextFormPropsType = {
    control: Control
    name: string
    rules: Object
    placeholder?: string
}

export const InputTextHookForm = ({control, name, rules,placeholder}: InputTextFormPropsType) => {
    return (
        <Controller control={control}
                    name={name}
                    rules={rules}
                    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
                        <InputText
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            error={error}
                        />
                    )}/>
    )
}

