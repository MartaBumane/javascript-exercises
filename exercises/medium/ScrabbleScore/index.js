/**
 * Scrabble Score
 *
 * Given a word, compute the scrabble score for that word.
 *
 * Letter Values
 * You'll need these:
 *
 *      Letter                           Value
 *      A, E, I, O, U, L, N, R, S, T       1
 *      D, G                               2
 *      B, C, M, P                         3
 *      F, H, V, W, Y                      4
 *      K                                  5
 *      J, X                               8
 *      Q, Z                               10
 *
 * Examples:
 *
 *      "cabbage" should be scored as worth 14 points:
 *
 *      3 points for C
 *      1 point for A, twice
 *      3 points for B, twice
 *      2 points for G
 *      1 point for E
 *
 * And to total:
 *
 *      3 + 2*1 + 2*3 + 2 + 1
 *      = 3 + 2 + 6 + 3
 *      = 5 + 9
 *      = 14
 *
 * Extensions:
 *
 *      You can play a double or a triple letter.
 *      You can play a double or a triple word.
 */
function score(inputString){
    inputString= inputString.toUpperCase();
    let score = 0;
    let resultArray= [];
    if (inputString===''){
        return score;
    }
    let onePoints = ['A','E','I','O','U','L','N','R','S','T'];
    let twoPoints = ['D','G'];
    let threePoins = ['B','C','M','P'];
    let fourPoints = ['F','H','V','W','Y'];
    let fivePoints = ['K'];
    let eightPoints = ['J','X'];
    let tenPoints = ['Q','Z'];

    
    
     for (let i = 0; i<inputString.length;i++){
       
      for(let j = 0;j<onePoints.length;j++){
        if (inputString.charAt(i)===onePoints[j]){
          resultArray.push(1);
          break;
        }
        if (inputString.charAt(i)===twoPoints[j]){
          resultArray.push(2);
          break;
        }
        if (inputString.charAt(i)===threePoins[j]){
          resultArray.push(3);
          break;
        }
        if (inputString.charAt(i)===fourPoints[j]){
          resultArray.push(4);
          break;
        }
        if (inputString.charAt(i)===fivePoints[j]){
          resultArray.push(5);
          break;
        }
        if (inputString.charAt(i)===eightPoints[j]){
          resultArray.push(8);
          break;
        }
        if (inputString.charAt(i)===tenPoints[j]){
          resultArray.push(10);
          break;
        }
      }
     }

    
    score = resultArray.reduce((a,b) => a + b, 0);


    return score;


}

module.exports = score;