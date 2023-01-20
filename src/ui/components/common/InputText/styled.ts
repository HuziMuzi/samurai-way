import styled from "styled-components";
import {FieldError} from "react-hook-form";
import {DefaultInputPropsType} from "./InputText";

export type  CustomInputPropsType = DefaultInputPropsType & {
    error?: FieldError
}

export const InputWrapper = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin: 10px;
`

export const CustomInput = styled.input<CustomInputPropsType>`
  outline: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
  background-color: #f8f8f8;
  border: 1px solid ${props => props.error ? props.theme.colors.severity.error : props.theme.colors.border};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s linear;

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
`


