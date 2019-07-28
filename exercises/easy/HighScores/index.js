/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  constructor(input) {
    this.scores = input;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    let bestScore= 0;

    for(let i = 0; i<this.scores.length;i++){
      let currentScore = this.scores[i];

      if (currentScore>bestScore){
          bestScore = currentScore;
      }
    }
    return bestScore;
  }
    

  get personalTopThree() {
    let arraySorted = this.scores.sort(function(a, b){return a-b});
    let returnableArray = [];

    returnableArray = (arraySorted.slice(-3));

    return returnableArray.reverse();
  }
}
module.exports = HighScores;
