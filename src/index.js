import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

interact(".trash").dropzone({
  accept: ".object",
  ondrop: (event) => {
    var draggableElement = event.relatedTarget;
    draggableElement.style.visibility = "hidden";
    console.log("Dropado");
  },
});

interact(".object").draggable({
  // movimentação suave
  inertia: true,

  /*    MODIFICADORES
  Define que apenas o determinado objeto será movimentado.
  */
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],

  /*    OBSERVADORES
  Determina o que deve ser executado enquanto uma ação de movimentação
  estiver acontecendo.
  */
  listeners: { move: dragMoveListener },
});

function dragMoveListener(event) {
  let target = event.target;
  // calcula a positção final do objeto
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // realiza a mudança visual do objeto, através de uma transformação
  target.style.transform = `translate(${x}px, ${y}px)`;

  // atualiza a posição do objeto
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

function iniciarJogo() {
  var goFS = document.getElementById("goFS");
  goFS.addEventListener(
    "click",
    function () {
      var videoElement = document.getElementById("main").requestFullscreen();
      videoElement.requestFullscreen();
    },
    false
  );
}
