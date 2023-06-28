export interface IUser {
    email : string;
    password: string;
}

export interface IRegUser extends IUser {
    confirmpass: string
}