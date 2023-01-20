import React from 'react';
import {useForm} from "react-hook-form";
import {TextError} from "../../components/common/UiBox/styled";
import {DialogsFormWrapper, CustomTextAreaBox} from "./styles";
import Button from "../../components/common/Button/Button";

type dialogsFormPropsType = {
    onSubmit: (data: TFormData) => void
}

export type TFormData = {
    message: string
}

export const DialogsForm = (props: dialogsFormPropsType) => {
    const {register, handleSubmit, resetField, formState: {errors}} = useForm<TFormData>()

    const onClickSubmit = (formData: TFormData) => {
        props.onSubmit(formData)
        resetField('message')
    }
    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            <DialogsFormWrapper>
                <CustomTextAreaBox>
                    {/*<CustomTextArea register={register} name={'message'} validation={{required: true}}/>*/}
                    {errors.message && <TextError>message is required</TextError>}
                </CustomTextAreaBox>
                <div>
                    <Button>Send</Button>
                </div>
            </DialogsFormWrapper>

        </form>
    );
};

export default DialogsForm;
