type GameScore = `Player ${"One" | "Two"} won this game`;

class TennisGame {
  playerOneScored() {}

  score(): GameScore {
    return "Player One won this game";
  }
}

export default TennisGame;
