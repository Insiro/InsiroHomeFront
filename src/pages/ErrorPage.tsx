import styled from "@emotion/styled";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 1260px;
    padding: 0 47px 105px 135px;
    @media (max-width: 1350px) {
        padding-left: 30px;
        padding-right: 60px;
    }
`;
const Content = styled.div`
    padding-right: 60px;
    p {
        margin-bottom: 110px;
    }
    @media (max-width: 1350px) {
        padding-right: 0;
    }
`;

const Error = (props: { status?: number; desc: string }) => (
    <div style={{ paddingTop: "190px" }}>
        <Wrapper>
            <Content>
                {props.status && <h1>{props.status}</h1>}
                <br />
                <hr />
                <p>{props.desc}</p>
            </Content>
        </Wrapper>
    </div>
);

export const ErrorPage = () => {
    const error = useRouteError();
    if (!isRouteErrorResponse(error)) return <Error desc="something wrong" />;
    switch (error.status) {
        case 401:
            return <Error desc="UnAuthorized" status={401} />;
        case 404:
            return <Error desc="Not Found" status={404} />;
        case 503:
            return <Error desc="API Server Down" status={503} />;
    }
    return <Error desc="something wrong" />;
};
