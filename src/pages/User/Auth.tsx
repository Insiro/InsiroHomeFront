import { KeyboardEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth";
import { buttonStyle } from "@/shared/style";
import { SimpleLayout } from "@/widgets/LayoutComponent";
import { InputEvent, TextInput } from "@/widgets/Text";

export const LoginPage = () => {
    const [uName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const { login, user } = useAuth();
    const redirect = useNavigate();
    const handleIdChanged = (event: InputEvent) => setUserName(event.target.value);
    const handlePwdChanged = (event: InputEvent) => setPwd(event.target.value);

    useEffect(() => {
        if (user != null) redirect("/user");
    }, [user]);

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
            <br />
            <TextInput value={uName} onChange={handleIdChanged} placeholder="UserName" onKeyDown={handleKeyPress} />
            <TextInput value={pwd} onChange={handlePwdChanged} type="Password" placeholder="password" onKeyDown={handleKeyPress} />
            <br />
            <br />
            <div css={buttonStyle.Default} onClick={loginAction}>
                Login
            </div>
        </SimpleLayout>
    );
};
