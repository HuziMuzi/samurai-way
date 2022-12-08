import {DetailedHTMLProps, FC} from "react";
import style from './Button.module.scss'



export type TDefaultHTMLButton = DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    >;

export type TButtonProps   = TDefaultHTMLButton &{
    isDisabled?: boolean
}

const Button: FC<TButtonProps> = ({ isDisabled, className, ...props }) => {

    const finalClassName = `${style.btn} ${className}`

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick && props.onClick(e);
    };
    return (
        <button
            type={props.type}
            disabled={isDisabled}
            onClick={(e) => onClickHandler(e)}
            {...props}
            className={finalClassName}

            // backgroundColor={props.backgroundColor}
            // size={props.size}
            // isLoading={props.isLoading}
            // withShadow={props.withShadow}
            // withBorder={props.withBorder}
            // severity={props.severity}
        >
            {props.children}
        </button>
    );
};

export default Button;