import { useEffect } from "react";

function SinglePlayer() {

   function getWords() {

      async function fetchWords() {
         const response = await fetch('http://localhost:3000/words');
         const allWords = await response.json();
         console.log(allWords);

         const word = Math.floor(Math.random() * allWords.length);
         console.log(allWords[word]);
      }

      useEffect(() => {
         fetchWords();
      }, [])
   }
   getWords();

   return (
      <>
         <h1>Single Player</h1>
      </>
   )
}
export default SinglePlayer;