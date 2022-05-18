const jumbledWords = document.querySelectorAll("#jumbledWordsWrapper > span");
const orderedWords = document.querySelectorAll("#orderedWordsWrapper > span");

const wow = new Audio("assets/sound/wow_8.mp3");

let countOrdenedWords = 0;

console.log("JumbledWords: ", jumbledWords);
console.log("OrderedWords: ", orderedWords);

jumbledWords.forEach((element) => {
  element.addEventListener("dragstart", dragStartHandler);
  element.addEventListener("dragend", dragEndHandler);
});

function dragStartHandler(event) {
  event.target.style = "opacity: 0.3";
  event.dataTransfer.setData(
    "text",
    event.target.getAttribute("data-source-id")
  );
}

function dragEndHandler(event) {
  event.target.style = "opacity: 1";
}

let ordenedWords = orderedWords.forEach((element) => {
  element.addEventListener("dragenter", dragEnterHandler);
  element.addEventListener("dragover", dragOverHandler);
  element.addEventListener("dragleave", dragLeaveHandler);
  element.addEventListener("drop", dropHandler);
});

function dragEnterHandler(event) {
  event.target.style =
    "border: 2px dashed gray; box-sizing: border-box; background: whitesmoke";
}

function dragOverHandler(event) {
  event.preventDefault();
}

function dragLeaveHandler(event) {
  event.target.style = "border: none; background: #abdcef";
}

function dropHandler(event) {
  event.preventDefault();
  dragLeaveHandler(event);

  const dataSourceId = event.dataTransfer.getData("text");
  const dataTargetId = event.target.getAttribute("data-target-id");

  if (dataSourceId === dataTargetId) {
    event.target.insertAdjacentHTML("afterbegin", dataSourceId);
    event.target.style = "border: none; background: #abcdef";

    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);

    Object.assign(sourceElemSpanTag, {
      className: "no-longer-draggable",
      draggable: false,
    });
    countOrdenedWords++;
    if (countOrdenedWords === 6) {
        wow.play();
    }
  }
}
