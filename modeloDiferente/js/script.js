
const buttons = document.querySelectorAll('.button-item');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const action = event.target.dataset.action;

    switch (action) {
      case 'button-a':
        // código para abrir un modal
        console.log('Se presionó el botón para abrir un modal');
        window.location.href = 'details.html';
        break;
      case 'button-b':
        // código para cargar contenido
        console.log('Se presionó el botón para cargar contenido');
        window.location.href = 'https://www.tibia.com';
        break;
      case 'submit-form':
        // código para enviar un formulario
        console.log('Se presionó el botón para enviar un formulario');
        break;
      case 'load-page':
        // código para cargar una página diferente
        console.log('Se presionó el botón para cargar una página diferente');
        window.location.href = 'https://www.ejemplo.com/otra-pagina';
        break;
      default:
        console.log('Acción no reconocida');
    }
  });
});
