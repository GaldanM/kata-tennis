type LabelScore = "Love" | "Fifteen" | "Thirty" | "Forty" | "Advantage";
type WinnerMessage = `Player ${string} won this game`;
type GameScore = `${LabelScore} ${LabelScore}` | "Deuce" | WinnerMessage;

class TennisGame {
  private playerOneScore: number;
  private playerTwoScore: number;

  constructor() {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  playerOneScored(): void {
    this.playerOneScore += 1;
  }

  playerTwoScored(): void {
    this.playerTwoScore += 1;
  }

  score(): GameScore {
    if (this.playerOneScore >= 4 && this.playerTwoScore <= this.playerOneScore - 2) {
      return "Player One won this game";
    }

    if (this.playerOneScore >= 3 && this.playerTwoScore === this.playerOneScore) {
      return "Deuce";
    }

    if (this.playerOneScore >= 3 && this.playerOneScore - this.playerTwoScore === 1) {
      return "Advantage Forty";
    }

    return `${scoreToLabel(this.playerOneScore)} ${scoreToLabel(this.playerTwoScore)}` as GameScore;
  }
}

function scoreToLabel(score: number): LabelScore {
  const labels: LabelScore[] = ["Love", "Fifteen", "Thirty", "Forty"];

  return labels[score];
}

export default TennisGame;
