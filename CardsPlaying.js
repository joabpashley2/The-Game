const db = fireproof("my-synced-db");
connect.netlify(db);

const urlParams = new URLSearchParams(window.location.search);
const FINAL_PLAYER_1 = urlParams.get('user1');
const FINAL_PLAYER_2 = urlParams.get('user2');
document.getElementById("player1-name").innerHTML = FINAL_PLAYER_1;
document.getElementById("player2-name").innerHTML = FINAL_PLAYER_2;

// ✅ LISTEN FOR CROSS-DEVICE UPDATES NATIVELY
db.subscribe(async () => {
    try {
        const gameData = await db.get("active-game-session");
        console.log("Live synced game data received from cloud:", gameData);
        // You can use gameData.player1, gameData.deck1, etc., here to sync game moves!
    } catch (err) {
        console.log("No active sync database session found yet.");
    }
});

// ✅ FIX THE FETCH URL PATHWAY FOR NETLIFY (Removed the dot '.')
fetch("/Cardscards.json")
  .then(response => response.json())
  .then(data => {
    const KHAOS_DECK = data.khaosDeck;
    // Your game loop setup here
  });
