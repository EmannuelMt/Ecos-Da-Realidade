// src/services/profileService.js
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Referência para a coleção de perfis
const profilesCollection = collection(db, 'profiles');

// Criar ou atualizar perfil do usuário
export const createOrUpdateProfile = async (userId, profileData) => {
  try {
    const profileRef = doc(db, 'profiles', userId);
    await setDoc(profileRef, {
      ...profileData,
      updatedAt: new Date()
    }, { merge: true });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar perfil:', error);
    return { success: false, error: error.message };
  }
};

// Buscar perfil do usuário
export const getProfile = async (userId) => {
  try {
    const profileRef = doc(db, 'profiles', userId);
    const profileSnap = await getDoc(profileRef);
    
    if (profileSnap.exists()) {
      return { success: true, data: profileSnap.data() };
    } else {
      // Criar perfil padrão se não existir
      const defaultProfile = {
        displayName: '',
        bio: '',
        avatar: '',
        preferences: {
          theme: 'dark',
          notifications: true,
          language: 'pt-BR'
        },
        stats: {
          campaignsCreated: 0,
          campaignsJoined: 0,
          charactersCreated: 0,
          enigmasSolved: 0,
          sessionsPlayed: 0
        },
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      await setDoc(profileRef, defaultProfile);
      return { success: true, data: defaultProfile };
    }
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return { success: false, error: error.message };
  }
};

// Atualizar estatísticas do usuário
export const updateUserStats = async (userId, statsUpdate) => {
  try {
    const profileRef = doc(db, 'profiles', userId);
    await updateDoc(profileRef, {
      ...statsUpdate,
      updatedAt: new Date()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao atualizar estatísticas:', error);
    return { success: false, error: error.message };
  }
};

// Buscar personagens do usuário
export const getUserCharacters = async (userId) => {
  try {
    const charactersQuery = query(
      collection(db, 'characters'),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(charactersQuery);
    const characters = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return { success: true, data: characters };
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return { success: false, error: error.message };
  }
};

// Buscar campanhas do usuário
export const getUserCampaigns = async (userId) => {
  try {
    const campaignsQuery = query(
      collection(db, 'campaigns'),
      where('players', 'array-contains', userId)
    );
    
    const querySnapshot = await getDocs(campaignsQuery);
    const campaigns = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return { success: true, data: campaigns };
  } catch (error) {
    console.error('Erro ao buscar campanhas:', error);
    return { success: false, error: error.message };
  }
};

// Upload de avatar (simulação - em produção use Firebase Storage)
export const uploadAvatar = async (userId, file) => {
  try {
    // Simulação de upload - em produção, use Firebase Storage
    return { 
      success: true, 
      url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}&background=0D1117&radius=50` 
    };
  } catch (error) {
    console.error('Erro ao fazer upload do avatar:', error);
    return { success: false, error: error.message };
  }
};