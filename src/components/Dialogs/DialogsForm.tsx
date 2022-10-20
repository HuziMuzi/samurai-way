import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

type dialogsFormPropsType = {
    newMessageText: string
    newMessageChangeTextArea: () => void
    toSentMessageHandler: () => void
}

export type formDataType = {
    message: string
}

const maxLength50 = maxLengthCreator(50)

const DialogsFields = (props: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Enter your text'}
                    name={'message'}
                    validate={[required,maxLength50]}
                    component={Textarea}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
};


const DialogsReduxForm = reduxForm<formDataType>({
    form: 'message'
})(DialogsFields)


type DialogsFormPropsType = {
    onSubmit : (formData:formDataType) => void
}

export const DialogsForm = (props: DialogsFormPropsType) => {
    const onClickSubmit = (formData:formDataType) => {
        props.onSubmit(formData)
        console.log(formData)
    }
    return <DialogsReduxForm onSubmit={onClickSubmit}/>
};

export default DialogsForm;