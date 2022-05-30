import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";
var infoPontos = document.getElementById('score')
var infoVida = document.getElementById('life')
var pontos = 0
var vida = '&#128153&#128153&'

interact(".trashPlastico").dropzone({
  accept: ".objPlastico, .objMetal, .objVidro, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
  if (draggableElement.className == 'objPlastico notSelected'){
    console.log("Dropado")
    pontuou()
  }else{
    console.log("Dropado errado")
    perde_vida()
  }
  },
});

interact(".objPlastico").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashMetal").dropzone({
  accept: ".objPlastico, .objMetal, .objVidro, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
  if (draggableElement.className == 'objMetal notSelected'){
    console.log("Dropado")
    pontuou()
  }else{
    console.log("Dropado errado")
  }
  },
});

interact(".objMetal").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashVidro").dropzone({
  accept: ".objPlastico, .objMetal, .objVidro, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
  if (draggableElement.className == 'objVidro notSelected'){
    console.log("Dropado")
    pontuou()
  }else{
    console.log("Dropado errado")
  }
  },
});

interact(".objVidro").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashPapel").dropzone({
  accept: ".objPlastico, .objMetal, .objVidro, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
  if (draggableElement.className == 'objPapel notSelected'){
    console.log("Dropado")
    pontuou()
  }else{
    console.log("Dropado errado")
  }
  },
});

interact(".objPapel").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

interact(".trashOrganico").dropzone({
  accept: ".objPlastico, .objMetal, .objVidro, .objPapel, .objOrganico",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
  if (draggableElement.className == 'objOrganico notSelected'){
    console.log("Dropado")
    pontuou()
  }else{
    console.log("Dropado errado")
  }
  },
});

interact(".objOrganico").draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  listeners: { move: dragMoveListener },
});

function dragMoveListener(event) {
  let target = event.target;
  // calcula a posição final do objeto
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // realiza a mudança visual do objeto, através de uma transformação
  target.style.transform = `translate(${x}px, ${y}px)`;

  // atualiza a posição do objeto
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

/*function iniciarJogo() {
  var goFS = document.getElementById("goFS");
  goFS.addEventListener(
    "click",
    function () {
      var videoElement = document.getElementById("main").requestFullscreen();
      videoElement.requestFullscreen();
    },
    false
  );
}*/
function pontuou(){
  pontos += 1000
  infoPontos.innerHTML = pontos
}
function perde_vida(){
  //vida = RETIRAR UMA VIDA -> '&#128153'
  infoVida.innerHTML = vida
}
