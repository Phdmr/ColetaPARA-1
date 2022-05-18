let heading = document.getElementById("main-heading");

let sourceElem = document.getElementById("source");
let targetElem = document.getElementById("target");

sourceElem.addEventListener("dragstart", (event) => {
  event.currentTarget.style = "opacity: 0.3";
  targetElem.style = "border: 10px dashed black";
  event.dataTransfer.setData("text", event.target.id);
});

sourceElem.addEventListener("dragend", () => {
  sourceElem.style = "opacity: 1";
  targetElem.style = "border: none";
});

targetElem.addEventListener("dragover", (event) => {
  event.preventDefault();
});

targetElem.addEventListener("drop", (event) => {
  const sourceElemData = event.dataTransfer.getData("text");
  const sourceElemId = document.getElementById(sourceElemData);

  event.target.appendChild(sourceElemId);
});
