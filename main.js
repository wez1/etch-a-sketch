const container = document.getElementById("container"); //grid container
const input = document.getElementById("input"); //variable to store input

const drawGrid = () => {

  //check for valid input and adjust gridSize accordingly, default: 16
	let gridSize = 16;
	if (parseInt(input.value) && input.value <= 64 && input.value > 0)
		gridSize = input.value;
	else {
    input.value = 16;
		gridSize = 16;
    alert("Invalid size! Setting size to 16");
  }

  //setting the values of css variables with the js variable
	document.body.style.setProperty("--grid-size", gridSize);
  document.body.style.setProperty("--grid-gap", gridSize > 32 ? "1px" : "2px");
  container.innerHTML = "";

  //the actual creation of the grid according to gridSize
  for (let i = gridSize ** 2; i > 0; i--) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  //selecting all squares and adding eventlistener for mouseover
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach(s => {
    s.addEventListener("mouseover", e => {
      e.target.style.background = `var(--color3)`;
      });
    });

};

//runs draw with defaults when script file is loaded in html
drawGrid();
 