import React from "react";
import { Map } from "@googlemaps/react-wrapper";
import MyMarker from "./MyMarker";

const customMapStyles = [
  // Aquí puedes definir tus estilos personalizados para el mapa
  // Ejemplo de estilo para hacer que el agua sea de color azul
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#0099e5", // Cambia este color según tus preferencias
      },
    ],
  },
];
const MyComponent = () => {
  return (
    <div>
      <Map
        apiKey="AIzaSyD7D3i4Lc3W5S4xPjXmCjXnEEbvE4MJGrg"
        defaultZoom={8}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
      ></Map>
    </div>
  );
};

export default MyComponent;
