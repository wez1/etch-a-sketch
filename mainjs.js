var size;
let container = document.getElementById('container');
var color = "orange";

function makeGrid(prm){
	size = prm;
	for(let x=0; x<size*size; x++) {
    	let grid = document.createElement('div');
    	grid.className = "grid-box";
    	grid.style.height = (400/size);
    	grid.style.width = (400/size);
    	grid.id = "tile-"+(parseInt((x)/size)+1) +"-"+ (x%size+1);

    	grid.addEventListener("mouseover", function(event) {
    		event.target.style.backgroundColor = color;
    	}, false);

		document.getElementById('container').appendChild(grid);
	}
	console.log("divs created!");
}
function newGrid(){

	let answer = prompt("give the amount of columns (i.e. '5' for 5x5 grid )");
	parseInt(answer);
	if (answer && answer<=64 && answer>0) {
		removeElements(document.querySelectorAll(".grid-box") );
		makeGrid(answer);
	}
}

const removeElements = (elms) => [...elms].forEach(el => el.remove());