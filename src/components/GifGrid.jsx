import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  console.log({images, isLoading})

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2> Cargando ....</h2>)
      }
      <div className="card-grid">
        {
          images.map(( image ) =>(
            <GifItem 
              key={ image.id }
              //con el Spread Operator dejo accesibles las prop al componente
              { ...image }
            />
          ))
        }
      </div>
    </>
  );
};
