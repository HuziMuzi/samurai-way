import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type formDataType = {
    login:string,
    password: string,
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<formDataType>) => {
    return (
            <form  onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<formDataType>({
    form: "Login"
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:formDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};