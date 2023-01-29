import { createContext, useEffect, useState } from "react";
import { onAuthChangedListener } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//as the actual value that we want to acess
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubsribe = onAuthChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unsubsribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

