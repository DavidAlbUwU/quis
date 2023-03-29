function addUser() {
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    window.location=("game_page.html");
}

/*
player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");
player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = "turno de perguntas:"+player1Name;
document.getElementById("playerAnswer").innerHTML = "turno de respostas:"+player2Name;

*/

