import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react';
import {FieldError} from "react-hook-form";
import {Container, TextArea} from "./styles";
import {TextError} from "../UiBox/styled";

type DefaultCustomTextAreaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export type TCustomTextAreaProps = DefaultCustomTextAreaPropsType & {
    error?: FieldError
    onChangeText?: (value: string) => void
    onEnter?: () => void
    spanClassName?: string
}

export const CustomTextArea: FC<TCustomTextAreaProps> = ({
                                                             error, className,
                                                             onChangeText, onEnter, onChange, spanClassName,
                                                             type, onKeyPress, name, ...props
                                                         }) => {

    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    return (
        <Container>
            <TextArea
                value={props.value}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                error={error && !!error.message}
            >
                {props.children}
            </TextArea>
            {error && <TextError>{error ? error.message : ''}</TextError>}
        </Container>
    );
};
