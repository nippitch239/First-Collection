// AuthContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import auth from '../utils/firebase.js';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const appAuth = getAuth(auth);

    async function signUp(email, password, displayName) {
        const userCredential = await createUserWithEmailAndPassword(appAuth, email, password);

        // Update user profile
        if (displayName) {
            await updateProfile(userCredential.user, { displayName });
        }

        // Create a document in the "users" collection with the user's data
        try {
            const app = getFirestore();
            const usersCollectionRef = collection(app, 'users');
            const newUserDocRef = await addDoc(usersCollectionRef, {
                userId: userCredential.user.uid,
                displayName: displayName || '',
                email: email
            });
            console.log('Document written with ID: ', newUserDocRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
        }

        return userCredential;
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(appAuth, email, password);
    }

    function logOut() {
        return signOut(appAuth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, (currentUser) => {
            console.log('Auth', currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
