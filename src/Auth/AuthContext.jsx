import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };

    getSession();

    // Listen to auth changes (login/logout)
    const { data: listener } =
      supabase.auth.onAuthStateChange(
        (_event, session) => {
          setSession(session);
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // LOGIN
  const Login = async (email, password) => {
    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    return { data, error };
  };

  // SIGNUP
  const Signup = async (name, email, password) => {
    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

    return { data, error };
  };

  const Logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        Login,
        Signup,
        Logout,
        isAuthenticated: !!session,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthContextProvider"
    );
  }

  return context;
};
