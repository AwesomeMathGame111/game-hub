const games = [
{name:"Mario", file:"mario.html"},
{name:"Tetris", file:"tetris.html"},
{name:"Idle-Breakout", file:"Idle-Breakout.html"},
{name:"Cookie Clicker", file:"CookieClicker.html"},
{name:"Flappy Bird", file:"flappy.html"},
{name:"2048", file:"2048.html"},
{name:"Snow Rider 3D", file:"srd3d.html"},
{name:"Mario 64", file:"sm64.html"},
{name:"Slope", file:"slope.html"}

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
