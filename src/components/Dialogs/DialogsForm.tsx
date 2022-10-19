import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type dialogsFormPropsType = {
    newMessageText: string
    newMessageChangeTextArea: () => void
    toSentMessageHandler: () => void
}

export type formDataType = {
    message: string
}

const DialogsFields = (props: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your text'} name={'message'} component={'textarea'}/>
                {/*<textarea value={props.newMessageText} placeholder={'Enter your text'} */}
                {/*          onChange={props.newMessageChangeTextArea}></textarea>*/}
            </div>
            <div>
                <button>Отправить</button>
                {/*<button onClick={props.toSentMessageHandler}>Отправить</button>*/}
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