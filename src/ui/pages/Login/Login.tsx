import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {InputTextHookForm} from "../../components/common/InputTextForm/InputTextHookForm";
import Button from "../../components/common/Button/Button";
import InputCheckboxForm from "../../components/common/InputCheckbox/InputCheckboxForm";
import {LoginWrapper, MarginBox, SpanText} from "./styles";
import {useAppDispatch} from "../../../hooks/hooks";
import {LoginThunk} from "../../../bll/auth-reducer";


export type FormSubmitType = {
    email: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, control} = useForm<FormSubmitType>()

    const onClickSubmitHandler = ({email, password, rememberMe}: FormSubmitType) => {
        dispatch(LoginThunk(email, password, rememberMe))
    }

    const onClickLazySignIn = () => {
        const {email, password,rememberMe} = {
            email: "free@samuraijs.com",
            password: "free",
            rememberMe: true,
        };
        dispatch(LoginThunk(email,password,rememberMe))
    }

    return (
        <LoginWrapper>
            <div>
                <InputTextHookForm
                    control={control}
                    name='email'
                    placeholder='login'
                    rules={{
                        required: 'Login is required',
                        maxLength: {
                            value: 20,
                            message: 'Title should be maximum 20 characters long',
                        }
                    }}/>
            </div>
            <div>
                <InputTextHookForm
                    control={control}
                    name='password'
                    placeholder='password'
                    type='password'
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 4,
                            message: 'Password should be minimum 4 characters long',
                        }
                    }}/>
            </div>
            <div>
                <Controller control={control}
                            name='rememberMe'
                            render={({field: {onChange, value}}) => (
                                <InputCheckboxForm onChange={onChange} checked={value}><p>Remember me</p>
                                </InputCheckboxForm>)}/>
            </div>
            <MarginBox>
                <SpanText onClick={onClickLazySignIn}>Click</SpanText> if you want to use common test account credential
            </MarginBox>
            <div>
                <Button onClick={handleSubmit(onClickSubmitHandler)}>login</Button>
            </div>
        </LoginWrapper>
    );
};
