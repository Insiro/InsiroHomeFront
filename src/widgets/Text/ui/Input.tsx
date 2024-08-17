import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

import { Color, MediaQuery } from "@/shared/ui/constants";

export type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const TextInput = styled.input`
    max-width: 500px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 0;
    border-bottom: 1px solid;
    background: none;
    transition-property: color, border-bottom;
    padding-left: 1rem;
`;

interface LineProps extends ComponentProps<"input"> {
    title: string;
    stateUpdater?: CallableFunction;
    wrong?: boolean;
}
const LabelHeader = styled.h3`
    margin: 8px 0 8px 0;
    min-width: 150px;
    color: ${Color.text2};
`;
const Label = styled.label`
    display: flex;
    ${MediaQuery.Max479} {
        display: block;
    }
`;
const InputStyle = css`
    margin: 1rem;
    flex-grow: 1;
`;
export const LabeledInput = ({ stateUpdater: setter = () => {}, wrong = false, ...props }: LineProps) => {
    const onChange = (e: InputEvent) => setter(e.target.value);

    return (
        <Label style={props.style}>
            <LabelHeader>{props.title}</LabelHeader>
            <div css={InputStyle}>
                <TextInput css={[wrong && { borderBlockColor: "red" }]} value={props.value || ""} disabled={props.disabled} type={props.type} onChange={onChange} {...props} />
                {props.children}
            </div>
        </Label>
    );
};
