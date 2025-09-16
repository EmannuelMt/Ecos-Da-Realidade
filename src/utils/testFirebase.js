import { auth } from '../firebase/config';

export const testFirebaseConnection = async () => {
  try {
    console.log('Testando conexão com Firebase...');
    console.log('Auth object:', auth);
    console.log('App:', auth.app);
    return true;
  } catch (error) {
    console.error('Erro na conexão com Firebase:', error);
    return false;
  }
};

// Chame esta função no seu App.jsx ou em algum lugar para testar