const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const newTutorials = tutorials.map((tutorials) => {
    //we use split to get the words
    const words = tutorials.split(" ");
    //we use map to change the first letter to uppercase
    const fixedWords = words.map((word) => {
      //we use charAt to get the first letter
      const fixedLetters = word.charAt(0).toUpperCase();
      //we use slice to remove the first letter
      const reWriteWord = word.slice(1);
      return fixedLetters + reWriteWord;
    });
    //we use join to join the words back together
    return fixedWords.join(" ");
  });
  //
  return newTutorials;
};
