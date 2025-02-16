// Dashboard.jsx
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => navigate('/nuevo-amigurumi')}
          className="btn-custom py-3 px-6"
        >
          Crear nuevo amigurumi
        </button>
        <button
          onClick={() => navigate('/amigurumi-con-imagen')}
          className="btn-custom py-3 px-6"
        >
          Crear amigurumi con imagen de referencia
        </button>
      </div>
    </div>
  );
}
