import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const AuthContex = createContext([]);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UseContex = ({ children }) => {
    const [user, setUser] = useState({ name: 'naim', email: 'naimka@gmail.com' });


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])

    const signGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }


    return (
        <AuthContex.Provider value={{ user, signUp, logIn, logOut, signGoogle }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UseContex;