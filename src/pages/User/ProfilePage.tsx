import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth";
import { buttonStyle } from "@/shared/style";
import { SimpleLayout } from "@/widgets/LayoutComponent";
import { LabeledInput } from "@/widgets/Text";

//TODO: Update Action
export const ProfilePage = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [pwd, setPwd] = useState<string>("");
    const [confirmPwd, setConfirmPwd] = useState<string>("");
    const [name, setName] = useState<string>(user?.name || "");
    const [email, setEmail] = useState<string>(user?.email || "");

    useEffect(() => {
        if (user == null) return navigate("/auth");
        setEmail(user.email);
        setName(user.name);
    }, [user, navigate]);
    const invalidPwd = useMemo(() => {
        return pwd != confirmPwd;
    }, [pwd, confirmPwd]);

    return (
        <SimpleLayout>
            <LabeledInput value={user?.id} title="ID" disabled />
            <LabeledInput value={name} stateUpdater={setName} title="Name" />
            <LabeledInput value={email} type="email" stateUpdater={setEmail} title="Email" />

            <LabeledInput value={pwd} type="password" stateUpdater={setPwd} title="Password" />
            {pwd != "" && <LabeledInput value={confirmPwd} type="password" stateUpdater={setConfirmPwd} title="Check Password" wrong={invalidPwd} />}
            <button css={buttonStyle.Default} onClick={logOut}>
                Logout
            </button>
        </SimpleLayout>
    );
};
