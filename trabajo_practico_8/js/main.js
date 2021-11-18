
function bienvenida() {
  alert ("¡Espero que disfrutes de tu estadía en el sitio!");
}

function acercaDe() {
  alert ("Web diseñada por Fernando Figún para Potrero Digital.\n\nNoviembre, 2021.");
}

function aunNoImplementado() {
  alert ("Lo sentimos. Esta función aún no fue habilitada.");
}

function alternarTema() {
  document.body.classList.toggle("dark");

  var botonTema = document.getElementById("botonTema");

  if (botonTema.innerHTML == "Tema oscuro") {
    botonTema.innerHTML = "Tema claro";
    linkTema.innerHTML = "Tema claro";
  } else {
    botonTema.innerHTML = "Tema oscuro";
    linkTema.innerHTML = "Tema oscuro";
  }
}

function respuestaCartas() {
  var rnd = Math.floor(Math.random() * 3) + 1;
  var msg;

  if (rnd == 1) {msg = "¡Excelente decisión!"}
  if (rnd == 2) {msg = "¡Un topping delicioso!"}
  if (rnd == 3) {msg = "¡Exquisito!"}

  alert(msg);
}
