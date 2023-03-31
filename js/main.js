const formWarzone = document.querySelector("#formulario");
const formGodOfWar = document.querySelector("#formulariogow");
const formRedDeadRedemption2 = document.querySelector("#formulariorr2");

let respuesta = JSON.parse(localStorage.getItem("respuesta")) || [];
let enviado = JSON.parse(localStorage.getItem("enviado")) || [];
let recibido = JSON.parse(localStorage.getItem("recibido")) || [];

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const key = "7b2fdfcf6bb4bf1c910356a483587898";
  let ciudad = document.querySelector("#ciudad").value;
  ciudad = encodeURIComponent(ciudad);

  if (ciudad != "") {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key';

    fetch (url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((clima) => {
        let temp = clima.main.temp;
        tempC = temp - 273.15;
        let html = document.querySelector("temperatura");
        html.innerHTML = tempC.toFixed(0)
    
      })
      .catch(error =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'creo que no se pudo obtener el clima!',
          footer: '<a href="">consultalo con tu clima de confianza</a>'
        })
      })
  }
});

const render = () => {
  if (respuesta.length > 0) {
    respuesta.forEach((respuesta) => {
      const p = document.createElement("p");
      p.textContent = respuesta.Texto;
      p.id = respuesta.id;
      respuesta.appenChild(p);
    });

    const warzoneForm = document.querySelector("#formulario");
    warzoneForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const componentes = document.querySelector("#respuesta").value;
      const resultado = verificarComponentesWarzone(componentes);
      respuesta.push({ id: Date.now(), Texto: resultado });
      localStorage.setItem("respuesta", JSON.stringify(respuesta));
    });

    const formulariogow = document.querySelector("#formulariogow");

    formulariogow.addEventListener("submit", (event) => {
      event.preventDefault();
      const componentes = document.querySelector("#enviado").value;
      const resultado = verificarComponentesGodOfWar(componentes);
      enviado.push({ id: Date.now(), Texto: resultado });
      localStorage.setItem("enviado", JSON.stringify(enviado));
    });

    const formulariorr2 = document.querySelector("#formulariorr2");

    formulariorr2.addEventListener("submit", (event) => {
      event.preventDefault();
      const componentes = document.querySelector("#recibido").value;
      const resultado = verificarComponentesRedDeadRedemption2(componentes);
      recibido.push({ id: Date.now(), Texto: resultado });
      localStorage.setItem("recibido", JSON.stringify(recibido));
    });

    const warzone = localStorage.getItem("warzone");
    if (warzone) {
      const p = document.createElement("p");
      p.textContent = `Warzone: ${warzone}`;
      document.querySelector("#resultados").appendChild(p);
    }
  }
};

const guardarRespuesta = () => {
  localStorage.setItem("respuestas", JSON.stringify(respuesta));
};

const cargarRespuesta = () => {
  const respuestasGuardadas = localStorage.getItem("respuestas");
  if (respuestasGuardadas) {
    respuesta = JSON.parse(respuestasGuardadas);
    render();
  }
};

const warzoneForm = document.querySelector("#formulario");
warzoneForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = document.querySelector("#respuesta").value;
  const resultado = verificarComponentesWarzone(componentes);
});

const formulariogow = document.querySelector("#formulariogow");

formulariogow.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = document.querySelector("#enviado").value;
  const resultado = verificarComponentesGodOfWar(componentes);
});

const formulariorr2 = document.querySelector("#formulariorr2");

formulariorr2.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = document.querySelector("#recibido").value;
  const resultado = verificarComponentesRedDeadRedemption2(componentes);
});

function verificarComponentesGodOfWar(componentes) {
  return new Promise((resolve, reject) => {
    if (
      componentes.includes("i5") &&
      componentes.includes("GTX 1060") &&
      componentes.includes("8GB RAM")
    ) {
      resolve(
        "Tu computadora cumple con los requisitos para correr God of War"
      );
    } else {
      reject(
        "Tu computadora no cumple con los requisitos para correr God of War"
      );
    }
  });
}

function verificarComponentesWarzone(componentes) {
  if (
    componentes.includes("i5") &&
    componentes.includes("GTX 1660") &&
    componentes.includes("16GB RAM")
  ) {
    return "Tu computadora cumple con los requisitos para correr Warzone";
  } else {
    return "Tu computadora no cumple con los requisitos para correr Warzone";
  }
}

function verificarComponentesRedDeadRedemption2(componentes) {
  if (
    componentes.includes("i7") &&
    componentes.includes("RTX 2070") &&
    componentes.includes("16GB RAM")
  ) {
    return "Tu computadora cumple con los requisitos para correr Red Dead Redemption 2";
  } else {
    return "Tu computadora no cumple con los requisitos para correr Red Dead Redemption 2";
  }
}

const formularioWarzone = document.querySelector("#formulario");
formularioWarzone.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = event.target.elements.respuesta.value;
  const computadoraValida = verificarComponentesWarzone(componentes);
  if (computadoraValida) {
    Swal.fire({
      title: "¡Felicidades!",
      text: "Tu computadora es compatible con warzone.",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Lo siento",
      text: "Tu computadora no cumple con los requisitos para wazrzone.",
      icon: "error",
    });
    localStorage.setItem("warzone", "no compatible");
  }
});

const formularioGodOfWar = document.querySelector("#formulariogow");
formularioGodOfWar.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = event.target.elements.enviado.value;
  const computadoraValida = verificarComponentesGodOfWar(componentes);
  if (computadoraValida) {
    Swal.fire({
      title: "¡Felicidades!",
      text: "Tu computadora es compatible con God of War.",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Lo siento",
      text: "Tu computadora no cumple con los requisitos para God of War.",
      icon: "error",
    });
  }
});

const formularioRedDeadRedemption2 = document.querySelector("#formulariorr2");
formularioRedDeadRedemption2.addEventListener("submit", (event) => {
  event.preventDefault();
  const componentes = event.target.elements.recibido.value;
  const computadoraValida = verificarComponentesRedDeadRedemption2(componentes);
  if (computadoraValida) {
    Swal.fire({
      title: "¡Felicidades!",
      text: "Tu computadora es compatible con Red Dead Redemption 2.",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Lo siento",
      text: "Tu computadora no cumple con los requisitos para Red Dead Redemption 2.",
      icon: "error",
    });
  }
});
