const db = fireproof("my-synced-db");
connect.netlify(db);
const urlParams = new URLSearchParams(window.location.search);
const FINAL_PLAYER_1 = urlParams.get('user1');
const FINAL_PLAYER_2 = urlParams.get('user2');
document.getElementById("player1-name").innerHTML = FINAL_PLAYER_1;
document.getElementById("player2-name").innerHTML = FINAL_PLAYER_2;
//Game Logic
fetch("./Cardscards.json")
  .then(response => response.json())
  .then(data => {
    const KHAOS_DECK = data.khaosDeck;

  });