import { useState } from "react";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './router';
import UserTypeModal from './components/modals/UserTypeModal';

function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <Header openRegisterModal={() => setShowRegisterModal(true)} />
      <main className="min-h-screen pt-16">
        <AppRoutes />
      </main>
      <Footer openRegisterModal={() => setShowRegisterModal(true)} />

      {showRegisterModal && (
        <UserTypeModal onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
}

export default App;