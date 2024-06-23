import { KeyboardEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { useAuth } from "@/features/auth";
import { buttonStyle } from "@/shared/style";
import { SimpleLayout } from "@/widgets/LayoutComponent";
import { InputEvent, LabeledInput } from "@/widgets/Text";

const Spacer = styled.div`
    height: 3rem;
`;

export const LoginPage = () => {
    const [uName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const { login, user } = useAuth();
    const redirect = useNavigate();
    const handleIdChanged = (event: InputEvent) => setUserName(event.target.value);
    const handlePwdChanged = (event: InputEvent) => setPwd(event.target.value);

    useEffect(() => {
        if (user != null) redirect("/user");
    }, [user, redirect]);

    const loginAction = async () => {
        if ((await login(uName, pwd)) == null) alert("Failed to Sign In");
        else redirect("/user");
    };
    const handleKeyPress: KeyboardEventHandler = (e) => {
        if (e.key === "Enter") loginAction();
    };

    return (
        <SimpleLayout>
            <h1>Login</h1>
            <Spacer />
            <LabeledInput value={uName} onChange={handleIdChanged} placeholder="UserName" onKeyDown={handleKeyPress} title="ID" />
            <LabeledInput value={pwd} onChange={handlePwdChanged} type="Password" placeholder="password" onKeyDown={handleKeyPress} title="Password" />
            <Spacer />
            <button css={buttonStyle.Default} onClick={loginAction}>
                Login
            </button>
        </SimpleLayout>
    );
};
