import TennisGame from "../src/TennisGame";

describe("tennis game scoring system", () => {
  it("player should win at 4 points and 2 points more than opponent", () => {
    const game = new TennisGame();

    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Player One won this game");
  });
});