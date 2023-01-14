import React from 'react';
import {useForm} from "react-hook-form";
import {InputTextHookForm} from "../../components/common/InputTextForm/InputTextHookForm";
import Button from "../../components/common/Button/Button";
import InputCheckboxForm from "../../components/common/InputCheckbox/InputCheckboxForm";
import {LoginWrapper} from "./styles";


export const Login = () => {
    const {handleSubmit, control, reset} = useForm()
    const onClickSubmitHandler = (values: any) => {
        console.log( values)
    }

    return (
        <LoginWrapper>
            <div>
                <InputTextHookForm
                    control={control}
                    name='login'
                    placeholder='login'
                    rules={{
                    required: 'Login is required',
                    maxLength: {
                        value: 20,
                        message: 'Title should be maximum 20 characters long',
                    }}} />
            </div>
            <div>
                <InputTextHookForm
                    control={control}
                    name='password'
                    placeholder='password'
                    rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 4,
                        message: 'Password should be minimum 4 characters long',
                    }}} />
            </div>
            <div>
                <InputCheckboxForm><p>Remember me</p></InputCheckboxForm>

            </div>
            <div>
                <Button onClick={handleSubmit(onClickSubmitHandler)}>login</Button>
            </div>
        </LoginWrapper>
    );
};
