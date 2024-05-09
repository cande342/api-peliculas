"use client"
import React, { useState } from 'react';

type DataType = {
  id: number;
  nombre: string;
  ranking: number;
};

type RuletaProps = {
  apiData: DataType[];
};

const Ruleta: React.FC<RuletaProps> = ({ apiData }) => {
  const [elemento, setElemento] = useState<DataType | null>(null);
    console.log(apiData)
  const seleccionarElementoAleatorio = () => {
    if (apiData && apiData.length > 0) {
      const numAleatorio = Math.floor(Math.random() * apiData.length);
      setElemento(apiData[numAleatorio]);
    }
  };

  return (
    <aside className="md:w-1/3 max-w-xs mx-auto p-4 bg-primary-200 rounded-lg shadow-md mt-20">
      <button 
        onClick={seleccionarElementoAleatorio} 
        className="bg-accent-100 hover:bg-accent-200 text-text-200 hover:text-primary-100 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 block mx-auto mb-4"
      >
        ¡Obtener Resultado!
      </button>
      {elemento && (
        <div className="bg-primary-200 p-4 rounded-md">
          <h2 className="text-lg font-bold mb-2">Película elegida:</h2>
          <p>Nombre: {elemento.nombre}</p>
          <p>Valoración: {elemento.ranking}</p>
        </div>
      )}
    </aside>
  );
};

export default Ruleta;

