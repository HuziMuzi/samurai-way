import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../components/common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validator";
import {connect} from "react-redux";
import {LoginThunk} from "../../../Redux/auth-reducer";
import {AppRootState} from "../../../Redux/redux-store";
import style from '../../components/common/FormsControls/FormsControls.module.css'
import {Navigate} from "react-router-dom";

type formDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm = ({handleSubmit,error, ...rest}: InjectedFormProps<formDataType>) => {
    return (
        <form onSubmit={handleSubmit}>
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

            {error && <div className={style.formErrorSubmit}>
                {error}
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
        const {email, password, rememberMe} = formData
        props.LoginThunk(email, password, rememberMe)

    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
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