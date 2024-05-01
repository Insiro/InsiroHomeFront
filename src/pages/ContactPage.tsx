import { MediaQuery } from "@/shared/ui/constants";
import { Profile } from "@/shared/config";
import { TextBlock } from "@/widgets/Text";
import { css } from "@emotion/react";
import { Form } from "@/widgets/Form";
import { buttonStyle } from "@/shared/style";
import styled from "@emotion/styled";

const mailTo = `MAILTO:${Profile.email}`;

const ContactInfo = styled.div`
    p,
    a {
        font-size: 15px;
        color: #323232;
    }
`;

export const Contact = () => {
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
                <Form action={mailTo} className="contact-form">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button css={buttonStyle.Default}>Send message</button>
                </Form>
                <h2>contact</h2>
                <ContactInfo>
                    <p>
                        mail : <a href={mailTo}>{Profile.email}</a>
                    </p>
                    <p>
                        <a href={Profile.github}>GitHub</a>
                    </p>
                </ContactInfo>
            </TextBlock>
        </div>
    );
};
