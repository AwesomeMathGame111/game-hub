// 1. The Game Registry
const games = [
    {name:"Mario", file:"mario.html"},
    {name:"Tetris", file:"tetris.html"},
    {name:"Idle-Breakout", file:"Idle-Breakout.html"},
    {name:"Cookie Clicker", file:"CookieClicker.html"},
    {name:"Flappy Bird", file:"flappy.html"},
    {name:"2048", file:"2048.html"},
    {name:"Snow Rider 3D", file:"srd3d.html"},
    {name:"Mario 64", file:"sm64.html"},
    {name:"Slope", file:"slope.html"},
    {name:"Retro Bowl", file:"retro-bowl.html"},
    {name:"OvO", file:"ovo.html"},
    {name:"FNAF", file:"fnaf.html"},
    {name:"Proxy", file:"proxy.html"},
    {name:"Pizza Tower", file:"pizza-tower.html"},
    {name:"Drift Boss", file:"drift-boss.html"},
    {name:"Monkey Mart", file:"monkey-mart.html"},
    {name:"Emulator", file:"emulator.html"},
    {name:"Tanuki Sunset", file:"tanuki-sunset.html"},
    {name:"Baldi's Basics", file:"baldi.html"},
    {name:"IXL", file:"gn-math.html"},
    {name:"Pokemon Red", file:"pokemon-red.html"},
    {name:"Pokemon Blue", file:"pokemon-blue.html"},
    {name:"Pokemon Yellow", file:"pokemon-yellow.html"}
];

// 2. Render Games to Page Grid
function loadGames() {
    const container = document.getElementById("games");
    if (!container) return;
    
    container.innerHTML = "";

    games.forEach(game => {
        const div = document.createElement("div");
        div.className = "game";
        div.innerText = game.name;

        // Triggers the about:blank frame window when clicked
        div.onclick = () => {
            openGameInBlankWindow(game);
        };

        container.appendChild(div);
    });
}

// 3. Open Game in an about:blank Window
function openGameInBlankWindow(game) {
    // Open a fresh about:blank tab/pop-up window
    const popup = window.open("about:blank", "_blank", "width=900,height=650");

    if (!popup) {
        alert("Pop-up blocked! Please allow pop-ups for this site to open the game window.");
        return;
    }

    // Generate absolute URLs for the CSS and the target game file
    const cssUrl = window.location.origin + "/style.css";
    const gameUrl = window.location.origin + "/" + game.file;

    // Construct the wrapper page inside about:blank
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${game.name}</title>
            <link rel="stylesheet" type="text/css" href="${cssUrl}">
            <style>
                /* Forces the iframe window to occupy 100% of the viewport seamlessly */
                body, html { 
                    margin: 0; 
                    padding: 0; 
                    width: 100%; 
                    height: 100%; 
                    overflow: hidden; 
                    background-color: #000;
                }
                iframe { 
                    width: 100%; 
                    height: 100%; 
                    border: none; 
                }
            </style>
        </head>
        <body>
            <!-- The game HTML file runs encapsulated inside this iframe container -->
            <iframe src="${gameUrl}"></iframe>
        </body>
        </html>
    `);

    // Notify the window that document building is complete
    popup.document.close();
}

// 4. Dynamic Live Filter Search
function searchGames() {
    let input = document.getElementById("search").value.toLowerCase();
    let gameButtons = document.getElementsByClassName("game");

    for (let i = 0; i < gameButtons.length; i++) {
        let name = gameButtons[i].innerText.toLowerCase();
        if (name.includes(input)) {
            gameButtons[i].style.display = "block";
        } else {
            gameButtons[i].style.display = "none";
        }
    }
}

// Run layout build immediately when this script loads
loadGames();
