import styled from "styled-components";

export const LoginWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid white;

`
export const SpanText = styled.span`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
export const MarginBox = styled.div`
margin-bottom: 10px;
`
