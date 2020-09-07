function showResult() {
  document.querySelector("#result").innerText = document.querySelector(
    "#fofurinha"
  ).value;
}

document.querySelector("#fofurinha").oninput = showResult;
