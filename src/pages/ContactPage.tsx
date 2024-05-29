import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

import { Profile } from "@/shared/config";
import { buttonStyle } from "@/shared/style";
import { MediaQuery } from "@/shared/ui/constants";
import { Form } from "@/widgets/Form";
import { TextBlock } from "@/widgets/Text";

const MAILTO = `MAILTO:${Profile.email}?`;
const ContactInfo = styled.div`
    p,
    a {
        font-size: 15px;
        color: #323232;
    }
`;

export const Contact = () => {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [uName, setUName] = useState("");

    const sendMsg = () => {
        let url = `MAILTO:${Profile.email}?`;
        let payload = [];
        if (content.length != 0) payload.push(`body=${content}`.replaceAll("/\n", "%0A"));
        if (subject.length != 0) payload.push(`subject=${subject}`);
        console.log(payload);
        console.log(url + payload.join("&"));
        window.open(url + payload.join("&"));
    };
    return (
        <div style={{ paddingTop: "160px" }}>
            <TextBlock
                css={css`
                    ${MediaQuery.MIN1200} {
                        width: 50%;
                    }
                `}
            >
                <h2>Get in touch</h2>
                <Form onSubmit={sendMsg} className="contact-form">
                    <input type="text" value={uName} onChange={(e) => setUName(e.target.value)} placeholder="Your name" />
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} wrap="virtual" placeholder="Message"></textarea>
                    <button css={buttonStyle.Default}>Send message</button>
                </Form>
                <h2>contact</h2>
                <ContactInfo>
                    <p>
                        mail : <a href={MAILTO}>{Profile.email}</a>
                    </p>
                    <p>
                        <a href={Profile.github}>GitHub</a>
                    </p>
                </ContactInfo>
                {content.replaceAll("/n", "</br>")}
            </TextBlock>
        </div>
    );
};
