export interface IUser {
    userId: number;
    firstName: string;
    lastName: string;
    login: string
    password: string
}

export interface IUserService {
    logUserIn(login: string, password: string): Partial<IUser>;
    logUserOut(userId: number): void;
    isUserLoggedIn(): boolean;
}