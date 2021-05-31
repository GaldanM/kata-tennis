type LabelScore = "Love";
type WinnerMessage = `Player ${string} won this game`;
type GameScore = `${LabelScore} ${LabelScore}` | WinnerMessage;

class TennisGame {
  private playerOneScore: number;
  private readonly playerTwoScore: number;

  constructor() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  playerOneScored(): void {
    this.playerOneScore += 1;
  }

  score(): GameScore {
    if (this.playerOneScore >= 4 && this.playerTwoScore <= this.playerOneScore - 2) {
      return "Player One won this game";
    }
    return "Love Love";
  }
}

export default TennisGame;
