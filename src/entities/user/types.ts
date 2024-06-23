import { CreatedAt, Email, WithLongId } from "../utils/Global";

export interface SimpleUser extends WithLongId {
    name: string;
}

export interface AuthInfo {
    name: string;
    password: string;
}

export interface NewUser extends AuthInfo {
    email: Email;
}

export interface UpdateUser extends WithLongId {
    name?: string;
    password?: string;
    email?: Email;
}

export interface DetailedUser extends SimpleUser, CreatedAt {
    email: Email;
}
