import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {LoginThunk} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootState} from "../../Redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type formDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'email'}
                    name={'email'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    type={'password'}
                    name={'password'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type={"checkbox"}

                /> remember me
            </div>

            {props.error && <div className={style.formErrorSubmit}>
                {props.error}
            </div>
            }
            <div>
                <button>login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<formDataType>({
    form: "Login"
})(LoginForm)


type LoginPropsType = {
    isAuth: boolean
    LoginThunk: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formDataType) => {
        console.log(formData)
        const {email, password, rememberMe} = formData
        props.LoginThunk(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {LoginThunk})(Login)