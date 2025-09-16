// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Configurar provedor Google para pedir seleção de conta cada vez
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Cadastro com email e senha
  const signup = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar perfil com display name
      if (displayName) {
        await updateProfile(userCredential.user, {
          displayName: displayName
        });
        
        // Atualizar o usuário atual
        setCurrentUser(prev => ({
          ...prev,
          displayName: displayName
        }));
      }
      
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  // Login com email e senha
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login com Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // Reset de senha
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Atualizar perfil
  const updateUserProfile = (updates) => {
    return updateProfile(currentUser, updates);
  };

  // Atualizar email
  const updateUserEmail = (email) => {
    return updateEmail(currentUser, email);
  };

  // Atualizar senha
  const updateUserPassword = (password) => {
    return updatePassword(currentUser, password);
  };

  // Reautenticar usuário (para operações sensíveis)
  const reauthenticate = (password) => {
    const credential = EmailAuthProvider.credential(
      currentUser.email, 
      password
    );
    return reauthenticateWithCredential(currentUser, credential);
  };

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    reauthenticate
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}