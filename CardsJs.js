import { fireproof } from "https://esm.sh";
import { connect } from "https://esm.sh";

const db = fireproof("my-synced-db");
connect.netlify(db);
let player1Name = document.getElementById("player1-input").value;
let player2Name = document.getElementById("player2-input").value;
let deck1 = document.getElementById("deck1-opt").value;
let deck2 = document.getElementById("deck2-opt").value;

function goToGame() {
    if (player1Name.length >= 1 && player2Name.length >= 1 && deck1 !== "Select Deck" && deck2 !== "Select Deck") {
        window.location.href = `CardsGamePlay.html?user1=${player1Name}&user2=${player2Name}`;
    } else {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "Error, You Must Inputde and Select a Username and Valid Deck for Player 1 and a Username and Valid Deck for Player 2!";
    }
}
function player1InputButton() {
    player1Name = document.getElementById("player1-input").value.toLowerCase();
    let name1 = document.getElementById("test-player1-name");
    name1.innerHTML = "Player1's Name is Set as: " + player1Name;
    deck1 = document.getElementById("deck1-opt").value;
    let deck1Final = document.getElementById("player1-deck");
    deck1Final.innerHTML = "Player1's Deck is Set as: " + deck1;
}
function player2InputButton() {
    player2Name = document.getElementById("player2-input").value.toLowerCase();
    let name2 = document.getElementById("test-player2-name");
    deck2 = document.getElementById("deck2-opt").value;
    name2.innerHTML = "Player2's Name is Set as: " + player2Name;
    let deck2Final = document.getElementById("player2-deck");
    deck2Final.innerHTML = "Player2's Deck is Set as: " + deck2;
}
window.player2InputButton = player2InputButton;
window.player1InputButton = player1InputButton;
window.goToGame = goToGame;