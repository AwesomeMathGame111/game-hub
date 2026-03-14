const games = [

{name:"Snake", file:"snake.html"},
{name:"Tetris", file:"tetris.html"},
{name:"Pong", file:"pong.html"},
{name:"Breakout", file:"breakout.html"},
{name:"Flappy Bird", file:"flappy.html"}

];

function loadGames(){

const container = document.getElementById("games");
container.innerHTML = "";

games.forEach(game => {

const div = document.createElement("div");
div.className = "game";
div.innerText = game.name;

div.onclick = () => {
document.getElementById("gameframe").src = game.file;
};

container.appendChild(div);

});

}

function searchGames(){

let input = document.getElementById("search").value.toLowerCase();
let gameButtons = document.getElementsByClassName("game");

for(let i=0;i<gameButtons.length;i++){

let name = gameButtons[i].innerText.toLowerCase();

if(name.includes(input)){
gameButtons[i].style.display="block";
}
else{
gameButtons[i].style.display="none";
}

}

}

loadGames();
