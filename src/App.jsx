import React, { useState } from "react";

function CambiarFondo() {
  const [backgroundChanged, setBackgroundChanged] = useState(false);

  const handleClick = () => {
    if (!backgroundChanged) {
      // Cambia la imagen de fondo a imagen2.jpg
      document.body.style.backgroundImage = "url('imagen2.jpg')";
      setBackgroundChanged(true);
    } else {
      // Agrega el fragmento de URL (#123456)
      window.location.hash = "poste_seleccionado=10211101";
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h1>HOla</h1>
      <div
        style={{
          backgroundImage: backgroundChanged
            ? "url('imagen2.jpg')"
            : "url('imagen1.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vh",
          cursor: "pointer",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default CambiarFondo;
