import React from 'react';
import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form'
import {InputText} from "../InputText/InputText";

type InputTextFormPropsType<T extends FieldValues> = {
    control: Control<T>
    name: FieldPath<T>
    rules: Object
    placeholder?: string
    type?: string
}

export const InputTextHookForm = <T extends FieldValues> ({control, name, rules,placeholder, type}: InputTextFormPropsType<T>) => {
    return (
        <Controller control={control}
                    name={name}
                    rules={rules}
                    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
                        <InputText
                            type={type}
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            error={error}
                        />
                    )}/>
    )
}

