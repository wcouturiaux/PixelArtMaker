// Select color input
// Select size input
  
// When size is submitted by the user, call makeGrid()


function makeGrid() {
  // Your code goes here!
  let gridHeight = document.getElementById('inputHeight').value;
  let gridWidth = document.getElementById('inputWidth').value;
  let grid = document.getElementById('pixelCanvas');
  grid.innerHTML ="";

  //Create a row append the columns and append row to grid
  for(let row=1; row<=gridHeight; row++){
  	let tr = document.createElement('tr');
  	for(let col=1; col<=gridWidth; col++){
  		tr.appendChild(document.createElement('td'));
  	}
  	grid.appendChild(tr)
  }

}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(evt){ evt.preventDefault(); makeGrid();});
