import styled, {css} from "styled-components";

export const TextArea = styled.textarea<{ error?: boolean }>`
  text-align: start;
  all: unset;
  width: 100%;
  max-height: 150px;
  border-radius: 15px;
  resize: none;
  font-family: VarelaRound;
  padding: 15px;
  overflow-y: auto;
  font-size: 16px;
  margin-bottom: 7px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  ${props => props.error && css`
    border: 1px solid ${props.theme.colors.severity.error};
  `}
`

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
