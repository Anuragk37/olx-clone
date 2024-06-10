import { createContext, useContext, useEffect, useState } from "react";
import { auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged from Firebase

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    });

    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext); // Use AuthContext instead of MyContext
}

