"use client"

import React, { useState, useEffect } from 'react';
import Agregar from '@/components/agregar';
import Mostrar from '@/components/mostrar';
import Ruleta from '@/components/ruleta';
import { Header } from '@/components/header';

// Define el tipo de tus datos aquí
type DataType = {
  id: number;
  nombre: string;
  ranking: number;
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState<DataType[]>([]); // Cambiado de null a []

  useEffect(() => {
    fetchDataFromApi();
  }, []); // Llama a fetchDataFromApi cuando el componente se monta

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/peliculas", {
        headers: {
          Accept: "application/json",
        },
        method: "GET", 
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

  return (
    <main className="mb-20">
      <Header />
      <section className="flex flex-col md:flex-row"> 
        <Agregar />
        <Mostrar />
        <Ruleta apiData={apiData} /> {/* Pasamos apiData a Ruleta */}
      </section>
    </main>
  );
}


    
   