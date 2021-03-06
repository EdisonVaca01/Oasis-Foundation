//! IMPORTANTE  EXTENSIÓN  DE GOOGLE CHROME "AXE" AYUDA   HA INSPECCIONAR EL SITIO WEB EN EL ENTORNO DE ACCESIBILIDAD YA SEA DESKTOP COMO MOVIL

//ACTUALMENTE ESTAMOS ESTABLECIENDO LAS CONSTANTES "NAVTOGGLE" COMO "NAVMENU"
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
//POSTERIORMENTE ESTAMOS REALIZANDO QUE CUANDO HAGA CLICK EN "NAV TOGGLE" COSA QUE SIGNIFICA QUE SI NO ESTÁ AÑADE SINO LA ELIMINA
//=> SIGNIFICA REALIZAR UNA NUEVA FUNCIÓN
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  // AHORA EN ESTA FUNCIÓN ESTAMOS DICIENDO QUE : SI TENEMOS LA CLASE EN EL NAV MENU "NAV-MENU_VISIBLE"
  // PUES PONERLE EL AREA LABEL "CERRAR MENU" SINO AGREGAREOS EL "ABRIR MENÚ"
  // AL FINAL EL UN SI PASARÁ ESTO... Y SINO EL OTRO CASO SERÍA....
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


// NOSOTROS EN ESTE CASO ESTÁMOS LLAMANDO A LA FUNCIÓN
function myFunction() {
  // AHORA ESTAMOS ESTABLECIENDO QUE VAMOS HA REALIZAR UN EVENTO EN EL "BODY"
  var element = document.body;
  // Y POSTERIORMENTE REALIZAMOS LA ALTERACIÓN AL "DARK MODE" REGLA QUE SE ENCUENTRA EN EL CSS
  element.classList.toggle("dark-mode");
}


// NOSOTROS ESTAMOS ESTABLECIENDO UNA CONSTANTE CON CLASE .INPUT
const inputs = document.querySelectorAll(".input");
// CREAMOS UNA FUNCIÓN  CON NOMBRE ADDCL
function addcl() {
  // TAMBIÉN AGREGANDO EL VALOR PARENT HA PARENT.NODE
  let parent = this.parentNode.parentNode;
  // EN EL QUE ESTAMOS AGREGANDO FOCUS  EN EL PARENT.CLASSLIST
  parent.classList.add("focus");
}
// CREAMOS UNA FUNCIÓN  CON NOMBRE REMCL
function remcl() {
  let parent = this.parentNode.parentNode;
  //NOSOTROS  CREAMOS UN IF EN EL QUE BUSCAMOS IGUALDAD DE VALOR
  if (this.value == "") {
    // A LA FUNCIÓN ANTERIOR ELIMINAMOS EL FOCUS
    parent.classList.remove("focus");
  }
}

// NOSOTROS ESTÁMOS AGREGANDO A LOS INPUT  addc1 (ENFOCAR UN ELEMENTO)
// Y TAMBIÉN BLUR QUE ES PARA "ELIMINAR" EL FOCO DEL ELEMENTO 
inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

// AHORA ESTAMOS ESTABLECIENDO UNA NUEVA CONSTANTE  PARA QUE EL BOTÓN PUEDA REEDIRIGIRSE ARRIBA DE LA PÁGINA GRACIAS AL SELECTOR QUE LE ESTAMOS ESTABLECIENDO #SUBIR
const btnScrollToTop = document.querySelector("#subir");
// POSTERIORMENTE ESTAMOS AGREGANDO  UN DETECTOR DE EVENTOS  AL REALIZAR "CLICK" EN EL BOTÓN
// !IMPORTANTE : NOSOTROS HEMOS ELEGIGO  LA "FUNCTION" EN VEZ DE  LA "FUNCIÓN DE FLECHA" YA QUE TENÍA PROBLEMAS DE COMPATIBILIDAD EN EL DESARROLLO
btnScrollToTop.addEventListener("click", function () {
  // AHORA NOSOTROS ESTAMOS ESTABLECIENDO LAS REGLAS QUE SE VA HA REALIZAR EN LA VENTANA. EN ESTE CASO SUBIR UN 50 DE LA PÁGINA
  window.scrollTo({
    top: 50,
    left: 0,
    // ESTE ES UN COMPORTAMIENTO EN EL QUE ESTAMOS DICIENDO QUE VAYA DE FORMA FLUIDA Y SUAVES ES DECIR QUE NO SUBA DE FORMA AREGSIVA
    behavior: "smooth"
  });
});