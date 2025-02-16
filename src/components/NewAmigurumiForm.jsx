// NewAmigurumiForm.jsx
import { useState } from 'react';
import SpinnerScreen from './SpinnerScreen';
import Result from './Result';

export default function NewAmigurumiForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    tamaño: '',
    dificultad: '',
    descripcion: '',
    colores: '',
    detalles: '',
    hilo: '',
    grosorHilo: '',
    aguja: '',
    relleno: '',
    tecnicaCrochet: '',
    piezas: '',
    forma: '',
    unionPiezas: '',
    detallesAdicionales: '',
  });
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construir el prompt a partir de los datos
    const prompt = `Crea una guía para un amigurumi con la siguiente información:
- Nombre: ${formData.nombre}
- Tipo: ${formData.tipo}
- Tamaño: ${formData.tamaño}
- Dificultad: ${formData.dificultad}
- Descripción: ${formData.descripcion}
- Colores: ${formData.colores}
- Detalles específicos: ${formData.detalles}
- Material: ${formData.hilo} (Grosor: ${formData.grosorHilo}, Aguja: ${formData.aguja})
- Relleno: ${formData.relleno}
- Técnicas de crochet: ${formData.tecnicaCrochet}
- Número de piezas: ${formData.piezas}
- Forma: ${formData.forma}
- Unión y detalles adicionales: ${formData.unionPiezas} ${formData.detallesAdicionales}`;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/ai/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      if (response.ok) {
        const result = await response.json();
        setReply(result.reply);
      } else {
        console.error('Error en el envío del formulario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud', error);
    } finally {
      setLoading(false);
    }
  };

  // Mientras carga, mostramos el spinner en pantalla completa
  if (loading) {
    return <SpinnerScreen />;
  }

  // Si ya se obtuvo respuesta, se muestra el componente Result
  if (reply) {
    return <Result reply={reply} />;
  }

  // Si no hay carga ni respuesta, se muestra el formulario
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Crear Nuevo Amigurumi</h2>
      
      {/* Aquí se muestran las secciones del formulario */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Información básica</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre del amigurumi</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder='Ej: "Oso Teddy"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de amigurumi</label>
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              placeholder='Ej: Animal, personaje de ficción, objeto'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tamaño aproximado</label>
            <input
              type="text"
              name="tamaño"
              value={formData.tamaño}
              onChange={handleChange}
              placeholder='Ej: "15 cm de alto, 10 cm de ancho"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de dificultad</label>
            <select
              name="dificultad"
              value={formData.dificultad}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="">Seleccionar...</option>
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Diseño y apariencia</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción detallada</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder='Ej: "Un oso de peluche marrón..."'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Colores principales y secundarios</label>
            <input
              type="text"
              name="colores"
              value={formData.colores}
              onChange={handleChange}
              placeholder='Ej: "Marrón claro, blanco, azul"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Detalles específicos</label>
            <input
              type="text"
              name="detalles"
              value={formData.detalles}
              onChange={handleChange}
              placeholder='Ej: "Ojos bordados, expresión alegre"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Técnicas y materiales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de hilo preferido</label>
            <input
              type="text"
              name="hilo"
              value={formData.hilo}
              onChange={handleChange}
              placeholder="Ej: Algodón, lana, acrílico"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Grosor del hilo</label>
            <input
              type="text"
              name="grosorHilo"
              value={formData.grosorHilo}
              onChange={handleChange}
              placeholder="Ej: Fino, medio, grueso"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tamaño de aguja de crochet</label>
            <input
              type="text"
              name="aguja"
              value={formData.aguja}
              onChange={handleChange}
              placeholder="Ej: 2.5 mm, 3.5 mm"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Relleno</label>
            <input
              type="text"
              name="relleno"
              value={formData.relleno}
              onChange={handleChange}
              placeholder="Ej: Algodón sintético, lana"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Técnicas de crochet específicas</label>
            <input
              type="text"
              name="tecnicaCrochet"
              value={formData.tecnicaCrochet}
              onChange={handleChange}
              placeholder='Ej: "Anillo mágico, aumentos, disminuciones"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Patrones y estructura</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Número de piezas</label>
            <input
              type="text"
              name="piezas"
              value={formData.piezas}
              onChange={handleChange}
              placeholder="Ej: Cabeza, cuerpo, brazos, etc."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Forma general</label>
            <input
              type="text"
              name="forma"
              value={formData.forma}
              onChange={handleChange}
              placeholder="Ej: Esférica, cilíndrica"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Unión de las piezas y detalles adicionales</label>
            <input
              type="text"
              name="unionPiezas"
              value={formData.unionPiezas}
              onChange={handleChange}
              placeholder='Ej: "Cosido, tejido junto, texturas y calados"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button type="submit" className="btn-custom py-2 px-6">
          Enviar
        </button>
      </div>
    </form>
  );
}
