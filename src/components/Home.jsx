import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleIngresar = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <button className="btn-custom w-full max-w-xs py-3" onClick={handleIngresar}>
        Ingresar
      </button>
    </div>
  );
}
