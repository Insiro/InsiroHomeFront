import styled from "@emotion/styled";

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const TextInput = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 16px;
    line-height: 40px;
    border: 0;
    border-bottom: 1px solid;
    background: none;
    transition-property: color, border-bottom;
    padding-left: 1rem;
`;
