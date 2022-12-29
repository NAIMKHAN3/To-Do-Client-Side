import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContex = createContext([]);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserContex = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser);
        })
    }, [])

    const signGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider);
    }

    const signUp = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth);
    }


    return (
        <AuthContex.Provider value={{ user, signUp, logIn, logOut, signGoogle }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContex;