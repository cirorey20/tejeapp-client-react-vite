// Layout.jsx
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

    return (
        <>
        <header className="w-full p-4 bg-blue-800 text-white text-center" onClick={handleHome}>
          Nombre de la App
        </header>
        <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
          {children}
        </main>
      </>
    );
  }