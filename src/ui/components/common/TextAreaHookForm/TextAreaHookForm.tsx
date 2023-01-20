import React from 'react';
import {Control, Controller, FieldPath, FieldValues} from "react-hook-form";
import {CustomTextArea} from "../CustomTextArea/CustomTextArea";

type TextAreaHookFormPropsType<T extends FieldValues> = {
    control: Control<T>
    name: FieldPath<T>
    rules?: Object
    placeholder?: string
    type?: string
}

export const TextAreaHookForm = <T extends FieldValues>(props:TextAreaHookFormPropsType<T>) => {
    return (
        <Controller control={props.control}
                    name={props.name}
                    rules={props.rules}
                    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
                        <CustomTextArea
                            type={props.type}
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                            placeholder={props.placeholder}
                            error={error}
                        />
                    )}/>
    );
};
