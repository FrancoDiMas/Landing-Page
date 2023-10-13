// Alert Message For specific page
window.onload = function() {
    var esTelefono = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (esTelefono) {
      alert("¡Bienvenido, esta página está diseñada unicamente para equipos de escritorios (PC/Laptop), de esta manera podrás ver el mismo modelo anterior con diferentes colores, de lo contrario no podrás verla correctamente.!");
    }
};
