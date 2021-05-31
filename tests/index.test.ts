import TennisGame from "../src/TennisGame";

describe("tennis game scoring system", () => {
  it("player one should win at 4 points and 2 points more than opponent", () => {
    const game = new TennisGame();

    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Player One won this game");
  });
  it("players should have a score of love at 0 points", () => {
    const game = new TennisGame();

    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Love Love");
  });
  it("players should have a score of fifteen at 1 points", () => {
    const game = new TennisGame();

    game.playerOneScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Fifteen Love");
  });
  it("players should have a score of deuce when having at least 3 points and the same score", () => {
    const game = new TennisGame();

    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    game.playerTwoScored();
    game.playerTwoScored();
    game.playerTwoScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Deuce");
  });
  it("players should have an advantage when having at least 3 points and one point ahead of the opponent", () => {
    const game = new TennisGame();

    game.playerOneScored();
    game.playerOneScored();
    game.playerOneScored();
    game.playerTwoScored();
    game.playerTwoScored();
    game.playerTwoScored();
    game.playerOneScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Advantage Forty");
  });
  it("player two should win at 4 points and 2 points more than opponent", () => {
    const game = new TennisGame();

    game.playerTwoScored();
    game.playerTwoScored();
    game.playerTwoScored();
    game.playerTwoScored();
    const gameScore = game.score();

    expect(gameScore).toStrictEqual("Player Two won this game");
  });
});
