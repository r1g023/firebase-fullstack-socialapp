import { createContext } from "react";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../firebase";

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signup: typeof signup;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  return signOut(auth);
};

const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

export const UserAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signup,
  logOut,
  googleSignIn
});

export const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, signup, logOut, googleSignIn }}>
      {children}
    </UserAuthContext.Provider>
  );
};
