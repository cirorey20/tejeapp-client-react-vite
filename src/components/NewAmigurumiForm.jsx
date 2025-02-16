// NewAmigurumiForm.jsx
import { useState } from 'react';

export default function NewAmigurumiForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    tamaño: '',
    dificultad: '',
    descripcion: '',
    imagenReferencia: null,
    colores: '',
    detalles: '',
    expresion: '',
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí procesás el envío del formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded space-y-6">
      {/* Información básica */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Información básica</h2>
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
              placeholder='Ej: 15 cm de alto, 10 cm de ancho'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nivel de dificultad deseado</label>
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

      {/* Diseño y apariencia */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Diseño y apariencia</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción detallada</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder='Ej: "Un oso de peluche marrón con un parche en el ojo y un sombrero de marinero"'
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
            <label className="block text-sm font-medium text-gray-700">Detalles específicos y expresión deseada</label>
            <input
              type="text"
              name="detalles"
              value={formData.detalles}
              onChange={handleChange}
              placeholder='Ej: "Ojos bordados, expresión feliz"'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Técnicas y materiales */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Técnicas y materiales</h2>
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

      {/* Patrones y estructura */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Patrones y estructura</h2>
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
