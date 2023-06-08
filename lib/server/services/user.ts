import { IUser, IUserService } from '@/lib/server/models/user';
import { usersData } from '@/lib/server/data/user';
import {IGlobalInstance, initializeService} from "@/lib/server/utils/initializeService";

export class UserService implements IUserService {
    private loggedInUser: number | null

    constructor(private users: IUser[]) {
        this.loggedInUser = null
    }

    logUserIn(login: string, password: string): Partial<IUser> {
        const userIndex = this.users.findIndex(user => user.login === login && user.password === password);

        if(userIndex === -1) {
            throw new Error('Login or password is incorrect');
        }

        if(this.loggedInUser === userIndex) {
            throw new Error('User is already logged in');
        }

        if(this.loggedInUser !== null) {
            throw new Error('Another user is already logged in');
        }

        this.loggedInUser = userIndex;

        return {
            userId: this.users[userIndex].userId,
            firstName: this.users[userIndex].firstName,
            lastName: this.users[userIndex].lastName,
        };
    }

    logUserOut(userId: number): void {
        const user = this.users.findIndex(user => user.userId === userId);

        if(user === -1 || this.loggedInUser !== user) { throw new Error('User is not logged in')}

        this.loggedInUser = null;
    }

    isUserLoggedIn(): boolean {
        return this.loggedInUser !== null;
    }
}

let globalUser = global as unknown as IGlobalInstance<UserService>

const user = initializeService(UserService, usersData, globalUser, 'user');

export default user;