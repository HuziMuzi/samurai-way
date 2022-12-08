import React from 'react';
import {useForm} from "react-hook-form";

type dialogsFormPropsType = {
onSubmit : (data : TFormData) => void
}

export type TFormData = {
    message: string
}


export const DialogsForm = (props: dialogsFormPropsType) => {
    const {register, handleSubmit, resetField, formState : {errors}} = useForm<TFormData>()

    const onClickSubmit = (formData:TFormData) => {
        props.onSubmit(formData)
        resetField('message')
    }

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            <div>
                <textarea {...register("message", {
                    required : true,
                    maxLength: {value: 50, message: 'max length 50 symbols'}},
                )}
                />
            </div>
            {errors.message && <div style={{color : 'red'}}>{errors.message.message}</div>}
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
};

export default DialogsForm;