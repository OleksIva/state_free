import React,{createContext,useState, useContext, useEffect} from "react";
const AuthContext = createContext();

export const Authprovider = ({children}) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(token);
        }   
    }, []);
    const login = (token) => {
        localStorage.setItem("token", token);
        setAuth(token);
    };
    const logout = () => {
        localStorage.removeItem("token");
        setAuth(null);
    };
    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}