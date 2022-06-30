import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category  ) => {
  const [images, setImages] = useState([]); // Estado inicial de las imagenes
  const [isLoading, setIsLoading] = useState( true ); //estado inicial del isLoading

  const getImages = async() =>{
    const newImages = await getGifs( category );
    setImages(newImages); // Efectivamente trajo las imagenes
    setIsLoading(false); // isLoading pasa a False ya que estan cargadas las imagenes
  }
  // Con useEffect con un [] vacio al final solo se ejecuta getGifs cuando se renderiza el componente
  useEffect(() =>{
    getImages();
  }, []);

  return {
    images,
    isLoading
  }

}
