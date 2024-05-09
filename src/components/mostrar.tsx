"use client"

import { useState } from 'react';

// Define el tipo de tus datos aquí
type DataType = {
  id: number;
  nombre: string;
  ranking: number;
};

export default function Mostrar() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState<DataType[] | null>(null);

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/peliculas", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setApiData(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch("/api/peliculas", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        const updatedData = apiData?.filter(item => item.id !== id);
        setApiData(updatedData || null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:w-1/3 mt-16">
    <button 
        onClick={fetchDataFromApi} 
        disabled={loading} 
        className="bg-accent-100 hover:bg-accent-200 text-text-200 hover:text-primary-100 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 block mx-auto mb-4"
    >
        {loading ? "Cargando..." : "Actualizar"}
    </button>
    {apiData && (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="py-2">Nombre</th>
                    <th className="py-2">Valoracion</th>
                    <th className="py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {apiData.map((item) => (
                    <tr key={item.id}>
                        <td className="py-4 px-6 text-center">{item.nombre}</td>
                        <td className="py-4 px-6 text-center">{item.ranking}</td>
                        <td className="py-4 px-6 text-center">
                            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}
</section>

  );
}
  