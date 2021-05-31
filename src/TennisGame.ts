type LabelScore = "Love" | "Fifteen" | "Thirty" | "Forty";
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
    return `${scoreToLabel(this.playerOneScore)} ${scoreToLabel(this.playerTwoScore)}` as GameScore;
  }
}

function scoreToLabel(score: number): LabelScore {
  const labels: LabelScore[] = ["Love", "Fifteen", "Thirty", "Forty"];

  return labels[score];
}

export default TennisGame;
