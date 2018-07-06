var currentPlayer = "red";
var row = document.querySelectorAll(".row");

let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];



row.forEach(row => {
	row.addEventListener("click", event => {
  	if (row.children.length < 1) {
      let checker = document.createElement("div");
      checker.classList.add(currentPlayer, "checker");
      row.appendChild(checker);
        currentPlayer = currentPlayer === "red" ? "black" : "red";
    }
  });
})



    
