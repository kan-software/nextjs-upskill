import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ClientUser } from '../models/user';

export type AuthProviderValue = {
  isLoggedIn: () => boolean;
  getUser: () => ClientUser | null;
  setUser: (userData: ClientUser) => void;
  resetUser: () => void;
};

const isUserData = (user: any): user is ClientUser =>
  typeof user.userId === 'number' &&
  typeof user.firstName === 'string' &&
  typeof user.lastName === 'string';

const AuthContext = createContext<AuthProviderValue | null>(null);

const userDataKey = 'userData';

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<ClientUser | null>(null);

  const isLoggedIn = () => Boolean(userData);

  const getUser = () => userData;

  const setUser = (newUser: ClientUser) => {
    localStorage.setItem(userDataKey, JSON.stringify(newUser));
    setUserData(newUser);
  };

  const resetUser = () => {
    localStorage.removeItem(userDataKey);
    setUserData(null);
  };

  const restoreUserData = () => {
    const stringifiedUserData = localStorage.getItem(userDataKey);
    if (stringifiedUserData) {
      const userData = JSON.parse(stringifiedUserData);
      if (isUserData(userData)) {
        setUserData(userData);
      }
    }
  };

  useEffect(() => {
    restoreUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, getUser, setUser, resetUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth should be used within AuthProvider');
  }
  return context;
}
