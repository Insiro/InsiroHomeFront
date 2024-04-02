import styled from "@emotion/styled";

export const Form = styled.form`
    margin-bottom: 85px;
    input,
    textarea {
        width: 100%;
        border: none;
        background: none;
        padding-bottom: 10px;
        margin-bottom: 28px;
        font-size: 14px;
        font-style: italic;
        border-bottom: 2px solid #c5d2df;
    }

    input:focus,
    textarea:focus {
        border-bottom: 2px solid #1b1c2e;
    }
    textarea {
        height: 125px;
    }
`;
