const puppeteer = require('puppeteer');
const assert = require('chai').assert;

// Función compartirRedesSociales
function compartirRedesSociales() {
  const urlActual = window.location.href;
  const mensaje = "¡Echa un vistazo a esta increíble página web!";
  
  // Simular la lógica de compartir en redes sociales
  console.log(`Compartiendo en redes sociales: ${urlActual} - ${mensaje}`);
}

// Prueba
describe('Pruebas unitarias de la capa del dominio', function() {
  let browser, page;

  before(async function() {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('file:///C:/Users/ASUS/source/VSCode/SpaceData%20Pagina/index.html'); // Reemplaza "/path/to/your/html/file.html" con la ruta correcta al archivo HTML
  });

  after(async function() {
    await browser.close();
  });

  it('debería simular el compartir en redes sociales', async function() {
    const consoleMessages = [];
    page.on('console', message => consoleMessages.push(message.text()));

    await page.evaluate(compartirRedesSociales);

    assert.isNotEmpty(consoleMessages, 'No se mostraron mensajes en la consola');
    assert.include(consoleMessages[0], 'Compartiendo en redes sociales', 'El mensaje de compartir en redes sociales no coincide');
  });
});
