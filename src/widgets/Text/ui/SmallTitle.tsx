import { CSSProperties, ReactNode } from "react";

export const BlockTitle = (props: { children: ReactNode; style?: CSSProperties }) => {
    return (
        <h3
            style={{
                textDecoration: "underline",
                textDecorationColor: "grey",
                textUnderlineOffset: "under",
                ...props.style,
            }}
        >
            {props.children}
        </h3>
    );
};
