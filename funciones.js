function mostrarMensaje() {
  const mensaje = "Gracias, nos contactaremos pronto contigo.";
  const mensajeElement = document.createElement("p");
  mensajeElement.textContent = mensaje;
  const contactoForm = document.getElementById("contacto-form");
  while (contactoForm.firstChild) {
    contactoForm.removeChild(contactoForm.firstChild);
  }
  contactoForm.innerHTML = mensajeElement.outerHTML;
  return false;
}

function compartirRedesSociales() {
  const mensaje = "¡Echa un vistazo a Space Data! Es la mejor opción para almacenar tus archivos en la nube.";
  const url = "https://www.spacedata.com"; 

  console.log("Compartiendo en redes sociales:");
  console.log("- Mensaje: " + mensaje);
  console.log("- URL: " + url);
}



