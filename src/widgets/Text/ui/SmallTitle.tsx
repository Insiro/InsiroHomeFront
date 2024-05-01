import { ReactNode } from "react";

export const BlockTitle = (props: { children: ReactNode }) => {
    return (
        <h3
            style={{
                textDecoration: "underline",
                textDecorationColor: "grey",
                textUnderlineOffset: "under",
            }}
        >
            {props.children}
        </h3>
    );
};
