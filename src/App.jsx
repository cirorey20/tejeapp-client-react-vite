import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Layout from './layout/Layout';
import NewAmigurumiForm from './components/NewAmigurumiForm';
import AmigurumiConImagen from './components/AmigurumiConImagen';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nuevo-amigurumi" element={<NewAmigurumiForm />} />
        <Route path="/amigurumi-con-imagen" element={<AmigurumiConImagen />} />
      </Routes>
    </Layout>
  );
}

export default App;
