let body = document.querySelector("body");
let h1 = document.querySelector("h1")
let btn_boxes = document.querySelectorAll(".btn");
let reset_btn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let themeChange = document.querySelector(".themeChange");
let count = 0;
let mode = true;
let turnO = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};


btn_boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count++;
        if(turnO){
            box.innerText = "O";
            box.style.color = "#FF8C00";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#4B0082";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of btn_boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for(let box of btn_boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const gameDraw = () => {
    if(count === 9) {
        msg.innerText = "It’s a Draw! Try Again!"
    msgContainer.classList.remove("hide");  
    }
}

const showWinner = (winner) => {
    msg.innerText = `Well Done! ${winner} is the Champion!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatterns) {
        let pos1Val = btn_boxes[pattern[0]].innerText;
        let pos2Val = btn_boxes[pattern[1]].innerText;
        let pos3Val = btn_boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
    gameDraw();
};

newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);

// themeChange.addEventListener("click", () => {
//     body.style.backgroundColor = "#1E1E1E";
//     h1.style.color = "#B0E0E6";
//     btn_boxes.style.backgroundColor = "black";

// })