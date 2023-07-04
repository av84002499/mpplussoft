import { createContext, useContext, useMemo, useState, useCallback } from "react";
import serverAuth from '../handler/auth'
export const AuthContext = createContext();


const { logIn, logOut } = serverAuth

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const login = useCallback(async (login_cre) => {
    console.log("Credentials is: ", login_cre)
    let [status, user_detail] = await logIn(login_cre);
    if (status === 200) {
      setCurrentUser(user_detail)
      return {status: status}
    } else {
      return {status: status, msg: user_detail}
    }
  }, [])
  // logout message
  const logout = useCallback(async () => {
    const [status, msg] = await logOut(currentUser.token)
    if (status === 200) {
      console.log(msg);
    } else {
      console.log(status, msg)
    }
    setCurrentUser(null)

  }, [currentUser])


  const value = useMemo(() => {
    return {
      login,
      logout,
      currentUser,
    }
  }, [login, logout, currentUser])
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

