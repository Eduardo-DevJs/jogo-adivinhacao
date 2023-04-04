const input = document.querySelector("input");
const numero = document.querySelector("#numero");
const dicaMensagem = document.querySelector(".dica-texto");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".close-modal");
let timer;

timer = setInterval(rodarTempo, 1000);

function handleTecla(e) {
  if (numero.value === "") {
    alert("Preencha o Campo!");
  } else {
    if (e.key === "Enter") {
      validacao();
      cleanInput();
    }
  }
}

function validacao() {
  if (numero.value === "27") {
    dicaMensagem.innerHTML = "PARABÉNS, ACERTOU";
    dicaMensagem.style.color = "green";
    numero.setAttribute("disabled", "disabled");
    setTimeout(()=>{
      window.location.reload(true);
    },5000);
  } else if (numero.value < "27") {
    dicaMensagem.innerHTML = "O numero é maior";
  } else {
    dicaMensagem.innerHTML = "O numero é menor";
  }
}

function cleanInput() {
  input.value = "";
}

function abrirModal() {
  modal.style.display = "block";
  body.classList.add("class");
}

function closeModal() {
  modal.style.display = "none";
  window.location.reload(true);
}

function pararTempo() {
  clearInterval(timer);
}

function rodarTempo() {
  let temporizador = document.querySelector(".temporizador");
  if (temporizador.innerHTML == 0) {
    abrirModal();
  } else {
    temporizador.innerHTML--;
  }
}

// eventos
input.addEventListener("keyup", handleTecla);
fecharModal.addEventListener("click", closeModal);
