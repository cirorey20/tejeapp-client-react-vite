// AmigurumiConImagen.jsx
import { useState } from 'react';

export default function AmigurumiConImagen() {
  const [formData, setFormData] = useState({
    imagenReferencia: null,
    colores: '',
    materiales: '',
    tamaño: '',
    tecnicasEspeciales: '',
    accesorios: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesa el envío del formulario, por ejemplo, enviando formData a la API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Detalles del Amigurumi con Imagen de Referencia
      </h2>
      
      {/* Input para subir la imagen de referencia */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imagen de referencia
        </label>
        <input
          type="file"
          name="imagenReferencia"
          accept="image/*"
          onChange={handleChange}
          className="mt-1 block w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Colores</label>
        <input
          type="text"
          name="colores"
          value={formData.colores}
          onChange={handleChange}
          placeholder='Ej: "Marrón, blanco, azul"'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Materiales</label>
        <input
          type="text"
          name="materiales"
          value={formData.materiales}
          onChange={handleChange}
          placeholder='Ej: "Algodón, lana, acrílico"'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tamaño</label>
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
        <label className="block text-sm font-medium text-gray-700">Técnicas especiales</label>
        <input
          type="text"
          name="tecnicasEspeciales"
          value={formData.tecnicasEspeciales}
          onChange={handleChange}
          placeholder='Ej: "Puntos texturizados, calados"'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Accesorios</label>
        <input
          type="text"
          name="accesorios"
          value={formData.accesorios}
          onChange={handleChange}
          placeholder='Ej: "Botones, lazos, ojos de seguridad"'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-custom py-2 px-6">
          Enviar
        </button>
      </div>
    </form>
  );
}
