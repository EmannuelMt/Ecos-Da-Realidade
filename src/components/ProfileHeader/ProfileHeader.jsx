// src/pages/Profile/components/ProfileHeader/ProfileHeader.jsx
import { useAuth } from "../../contexts/AuthContext";
import './ProfileHeader.css';

const ProfileHeader = () => {
  const { currentUser } = useAuth();

  return (
    <div className="profile-header">
      <div className="profile-avatar">
        <img 
          src={currentUser?.photoURL || '/default-avatar.png'} 
          alt="Avatar" 
          className="avatar"
        />
      </div>
      <div className="profile-info">
        <h1>{currentUser?.displayName || 'Usuário'}</h1>
        <p className="profile-email">{currentUser?.email}</p>
        <p className="profile-bio">Mestre de RPG apaixonado por criar histórias épicas!</p>
      </div>
      <div className="profile-actions">
        <button className="btn btn-secondary">Editar Perfil</button>
      </div>
    </div>
  );
};

export default ProfileHeader;