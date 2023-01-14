import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react';
import style from './TextArea.module.scss'
import {FieldValues, UseFormRegister} from "react-hook-form";


type DefaultTextAreaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export type TTextAreaProps = DefaultTextAreaPropsType & {
    error?: string
    onChangeText?: (value: string) => void
    onEnter?: () => void
    spanClassName?: string
    name: string
    register: UseFormRegister<FieldValues>
}

const TextArea: FC<TTextAreaProps> = ({
                                          error, className,
                                          onChangeText, onEnter, onChange, spanClassName,
                                          type, onKeyPress,register,name,  ...props
                                      }) => {

    const finalTextAreaClassName = `${style.textArea} ${className}`
    const finalSpanClassName = `${style.error} ${spanClassName ? spanClassName : ''}`


    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }


    return (
        <>
        <textarea
            {...register(name)}
            value={props.value}
            onChange={onChangeCallback}
            className={finalTextAreaClassName}
        >
        {props.children}
        </textarea>
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>

    );
};

export default TextArea;
