import { expect, test } from "bun:test";

import { Test } from "@/shared/config";
import { SignIn, getSignedUser } from "./auth";

test("login test ", async () => {
    const signIn = await SignIn({
        name: Test.User.name,
        password: Test.User.password,
    });

    expect(signIn.createdAt).toBeInstanceOf(Date);
    expect(signIn.id).toBeInstanceOf(Number);
    expect(signIn.name).toEqual(Test.User.name);
    const signed = await getSignedUser();
    expect(signed.name).toEqual(signed.name);
    expect(signed.id).toEqual(signed.id);
});
