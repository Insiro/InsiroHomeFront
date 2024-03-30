import styled from "@emotion/styled";
const Wrapper = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: #333;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    padding-top: 7px;
    font-size: 21px;
    top: 30px;
    cursor: pointer;
`;
export const ModelClose = (props: { onClick: () => void }) => {
    return <Wrapper onClick={props.onClick}>x</Wrapper>;
};
