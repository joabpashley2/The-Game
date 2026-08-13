const db = fireproof("my-synced-db");
connect.netlify(db);

let player1Name = "";
let player2Name = "";
let deck1 = "Select Deck";
let deck2 = "Select Deck";

window.goToGame = async function() { // Added 'async' so we can wait for the save
    player1Name = document.getElementById("player1-input").value;
    player2Name = document.getElementById("player2-input").value;
    deck1 = document.getElementById("deck1-opt").value;
    deck2 = document.getElementById("deck2-opt").value;

    if (player1Name.length >= 1 && player2Name.length >= 1 && deck1 !== "Select Deck" && deck2 !== "Select Deck") {
        
        // ✅ SAVE THE STATE TO FIREPROOF SO OTHER DEVICES CAN SEE IT
        await db.put({
            _id: "active-game-session", // Use a fixed ID so it always overwrites old games
            player1: player1Name,
            player2: player2Name,
            deck1: deck1,
            deck2: deck2,
            status: "starting"
        });

        // Redirect to your gameplay page
        window.location.href = `CardsGamePlay.html?user1=${player1Name}&user2=${player2Name}`;
    } else {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "Error, You Must Input and Select a Username and Valid Deck for Player 1 and a Username and Valid Deck for Player 2!";
    }
}

// ... Keep your player1InputButton and player2InputButton window mappings below exactly the same ...
