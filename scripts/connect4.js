var currentPlayer = "red";
var column = document.querySelectorAll(".column");






Connect4 = function(event){
    console.log("click")
    let cell = event.target;
    //cell.innerHTML = currentPlayer;
    if (currentPlayer==="red"){
        /*
        let checker = document.createElement("div");
        checker.classList.add("checker","red");
        cell.appendChild(checker);;*/
        currentPlayer="black";
        cell.classList+=' '+currentPlayer;
}else if(currentPlayer ==="black") {
    /*
    let checker = document.createElement("div");
        checker.classList.add("checker","black");
        cell.appendChild(checker);;*/
        currentPlayer = "red"
        cell.classList+=' '+currentPlayer;
  }
}

for(var i = 0; i < column.length; i++) {
    column[i].addEventListener('click', Connect4)
  };
