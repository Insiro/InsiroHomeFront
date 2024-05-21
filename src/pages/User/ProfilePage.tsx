import { useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth";
import { buttonStyle } from "@/shared/style";
import { SimpleLayout } from "@/widgets/LayoutComponent";
import { LabeledInput } from "@/widgets/Text";
import { DetailedUser } from "@/entities/user/types";

const PwdChangeInput = (props: { pwd: string; confirmPwd: string; setPwd: CallableFunction; setConfirmPwd: CallableFunction }) => {
    const invalidPwd = useMemo(() => {
        return props.pwd != props.confirmPwd;
    }, [props.pwd, props.confirmPwd]);
    return (
        <>
            <LabeledInput value={props.pwd} type="password" stateUpdater={props.setPwd} title="Password" />
            {props.pwd != "" && (
                <LabeledInput value={props.confirmPwd} type="password" stateUpdater={props.setConfirmPwd} title="Confirm" wrong={invalidPwd}>
                    {invalidPwd && <span>Password Not Match</span>}
                </LabeledInput>
            )}
        </>
    );
};

//TODO: Update Action
export const ProfilePage = () => {
    const paramUser = useLoaderData() as DetailedUser | null;
    const { user, logOut } = useAuth();
    const profile = paramUser || user;
    const isParam = useMemo(() => paramUser != null, [paramUser]);

    const navigate = useNavigate();

    const [pwd, setPwd] = useState<string>("");
    const [confirmPwd, setConfirmPwd] = useState<string>("");
    const [name, setName] = useState<string>(profile?.name || "");
    const [email, setEmail] = useState<string>(profile?.email || "");

    useEffect(() => {
        if (profile == null) return navigate("/auth");
        setEmail(profile.email);
        setName(profile.name);
    }, [profile, navigate]);

    return (
        <SimpleLayout>
            <LabeledInput value={profile?.id} title="ID" disabled />
            <LabeledInput value={name} stateUpdater={setName} title="Name" disabled={isParam} />
            <LabeledInput value={email} type="email" stateUpdater={setEmail} title="Email" disabled={isParam} />

            {!isParam && <PwdChangeInput pwd={pwd} confirmPwd={confirmPwd} setPwd={setPwd} setConfirmPwd={setConfirmPwd} />}
            <br />
            {!isParam && (
                <button css={buttonStyle.Default} onClick={logOut}>
                    Logout
                </button>
            )}
        </SimpleLayout>
    );
};
