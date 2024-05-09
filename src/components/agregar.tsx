"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

type DataType = {
  id: number;
  nombre: string;
  ranking: number;
};

export default function Agregar() {
  const initialData: DataType = {
    id: 1,
    nombre: '',
    ranking: 0
  };

  const [inputData, setInputData] = useState<DataType>(initialData);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/peliculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      });

      if (response.ok) {
        const responseData = await response.json();
        setInputData(initialData); // acá reiniciamos el form
      } else {
        setResponseMessage('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setResponseMessage('Error al enviar la solicitud');
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="md:w-1/3 max-w-xs mx-auto p-4 bg-primary-200 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Cargar Películas</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-text-100">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={inputData.nombre} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-full w-full text-gray-800 focus:outline-none focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="ranking" className="block text-sm font-medium text-text-100">Valoración:</label>
          <input type="text" id="ranking" name="ranking" value={inputData.ranking} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full text-gray-800 focus:outline-none focus:border-blue-500" required />
        </div>
        <button 
          type="submit" 
          disabled={loading} 
          className="bg-accent-100 hover:bg-accent-200/40 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed self-center block mx-auto"
        >
          {loading ? 'Enviando...' : 'Subir'}
        </button>
      </form>
    </aside>
  );
}

