import { useAuth } from "@/features/auth";
import { buttonStyle } from "@/shared/style";
import { SimpleLayout } from "@/widgets/LayoutSimpleContent";
import { TextInput, InputEvent } from "@/widgets/Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [uName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const handleIdChanged = (event: InputEvent) => setUserName(event.target.value);
    const handlePwdChanged = (event: InputEvent) => setPwd(event.target.value);
    const { login } = useAuth();

    const redirect = useNavigate();

    const onLoginClicked = async () => {
        const result = await login(uName, pwd);
        if (result != null) redirect("/user");
        //TODO: sign Failed Alert
    };

    return (
        <SimpleLayout>
            <h1>Login</h1>
            <br />
            <TextInput value={uName} onChange={handleIdChanged} placeholder="UserName" />
            <TextInput value={pwd} onChange={handlePwdChanged} type="Password" placeholder="password" />
            <br />
            <br />
            <div css={buttonStyle.Default} onClick={onLoginClicked}>
                Login
            </div>
        </SimpleLayout>
    );
};
