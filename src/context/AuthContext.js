import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import serverAuth from "../handler/auth";
export const AuthContext = createContext();

const { logIn, logOut } = serverAuth;

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const login = useCallback(async (login_cre) => {
    console.log("Credentials is: ", login_cre);
    let res = await logIn(login_cre);
    console.log("Response insid auth", res)
    if (res.status === 200) {
      setCurrentUser(res.data);
      return { status: res.status };
    } else {
      return { status: res.status, msg: res.data };
    }
  }, []);
  // logout message
  const logout = useCallback(async () => {
    const [status, msg] = await logOut(currentUser.token);
    if (status === 200) {
      console.log(msg);
    } else {
      console.log(status, msg);
    }
    setCurrentUser(null);
  }, [currentUser]);

  const value = useMemo(() => {
    return {
      login,
      logout,
      currentUser,
    };
  }, [login, logout, currentUser]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
