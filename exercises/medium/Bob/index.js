/**
 * Bob
 *
 * Bob is a lackadaisical teenager. In conversation, his responses are very limited.
 *
 * Bob answers 'Sure.' if you ask him a question.
 *
 * He answers 'Whoa, chill out!' if you yell at him.
 *
 * He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
 *
 * He says 'Fine. Be that way!' if you address him without actually saying anything.
 *
 * He answers 'Whatever.' to anything else.
 */
function hey (sentence){
    sentence =  sentence.replace(/\s\s+/g, '');
    console.log(sentence);
    let lastSymbol = sentence.charAt(sentence.length-1);
    let checkIfOnlyNumbersArray = sentence.split(/\W+/);
    let stringToCheck = checkIfOnlyNumbersArray.join("");
    
    if(sentence===''){
      return "Fine. Be that way!";
    }
      
    if (lastSymbol === '?'&&sentence === sentence.toUpperCase()&&isNaN(stringToCheck)){
      return "Calm down, I know what I'm doing!";
    }else if(lastSymbol === '?'){
      return 'Sure.';
    }else if(sentence === sentence.toUpperCase()){
      
      if(isNaN(stringToCheck)){
        return "Whoa, chill out!";
      }else{
        return "Whatever.";
      }
    }
    
    return "Whatever.";
  
    }
    
    module.exports = hey;  