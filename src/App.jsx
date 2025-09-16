// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Campaigns from './pages/Campaigns/Campaigns';
import Enigmas from './pages/Enigmas/Enigmas';
import Sheets from './pages/Sheets/Sheets';
import Rules from './pages/Rules/Rules';
import Discord from './pages/Discord/Discord';
import FAQ from './pages/FAQ/FAQ';
import About from './pages/About/About';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Rotas protegidas */}
              <Route path="/campanhas" element={
                <ProtectedRoute>
                  <Campaigns />
                </ProtectedRoute>
              } />
              <Route path="/enigmas" element={
                <ProtectedRoute>
                  <Enigmas />
                </ProtectedRoute>
              } />
              <Route path="/fichas" element={
                <ProtectedRoute>
                  <Sheets />
                </ProtectedRoute>
              } />
              <Route path="/perfil" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Rotas públicas */}
              <Route path="/regras" element={<Rules />} />
              <Route path="/discord" element={<Discord />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;