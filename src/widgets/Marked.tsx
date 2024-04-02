import Markdown from "marked-react";
import { useMemo } from "react";

import "highlight.js/styles/default.css";
import Lowlight from "react-lowlight";
import "react-lowlight/common";

const renderer = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code(snippet: any, lang: any) {
        return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
};

type Props = { value: string } | { children: string };

export const Marked = (props: Props) => {
    const value = useMemo(() => ("value" in props ? props.value : props.children), [props]);

    return <Markdown renderer={renderer} value={value} />;
};
