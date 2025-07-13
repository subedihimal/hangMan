function maskingUtility(word, guessedLetters){
   guessedLetters = guessedLetters.map(letter=>letter.toUpperCase());
   guessedLetters = new Set(guessedLetters);
   const result = word.toUpperCase().split('').map(char=>{
    if(guessedLetters.has(char)){
        return char;
    }else{
        return "_";
    }
   });
   return result.join('');
}