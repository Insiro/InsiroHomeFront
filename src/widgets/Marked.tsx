import Markdown from "marked-react";
import { useMemo } from "react";

import "highlight.js/styles/default.css";
//@ts-expect-error: TS7016
import Lowlight from "react-lowlight";
import "react-lowlight/common";
import styled from "@emotion/styled";

const CodeWrapper = styled.div`
    width: fit-content;
    min-width: 50%;
    max-width: 100%;
    overflow-x: scroll;
`;

const Wrapper = styled.div`
    max-width: 100%;
    img {
        max-width: 50%;
        max-height: 400px;
    }
    table img {
        max-width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
        color: #323232;
        font-weight: 400;
    }
`;

const renderer = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code(snippet: any, lang: any) {
        return (
            <CodeWrapper>
                {/* @ts-expect-error: TS2339 */}
                <Lowlight key={this.elementId} language={lang} value={snippet} />
            </CodeWrapper>
        );
    },
    html(html: string) {
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    },
};

type Props = { value: string } | { children: string };

export const Marked = (props: Props) => {
    const value = useMemo(() => ("value" in props ? props.value : props.children), [props]);

    return (
        <Wrapper>
            <Markdown renderer={renderer} value={value} />
        </Wrapper>
    );
};
