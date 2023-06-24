import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type User = {
  userId: number;
  firstName: string;
  lastName: string;
};

export type AuthProviderValue = {
  isLoggedIn: () => boolean;
  getUser: () => User | null;
  setUser: (userData: User) => void;
};

const isUserData = (user: any): user is User =>
  typeof user.userId === 'number' &&
  typeof user.firstName === 'string' &&
  typeof user.lastName === 'string';

const AuthContext = createContext<AuthProviderValue | null>(null);

const userDataKey = 'userData';

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<User | null>(null);

  const isLoggedIn = () => Boolean(userData);

  const getUser = () => userData;

  const setUser = (newUser: User) => {
    localStorage.setItem(userDataKey, JSON.stringify(newUser));
    setUserData(newUser);
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
    <AuthContext.Provider value={{ isLoggedIn, getUser, setUser }}>
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
