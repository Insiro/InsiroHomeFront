import { SimpleLayout } from "@/widgets/LayoutSimpleContent";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = (props: { status?: number; desc: string }) => (
    <SimpleLayout>
        {props.status && <h1>{props.status}</h1>}
        <br />
        <hr />
        <p>{props.desc}</p>
    </SimpleLayout>
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
