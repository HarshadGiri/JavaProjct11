// JS Task#1 - JavaScript Program
// 1. Ask the user for input in prompt
// 2. Create an array with object =>key and answer value
// 3. Check if the user's variable matches with any key from the array 
// -if yes show them the answer to this question
// -if not console log that program doesn't know the answer




const answers = [
  { key: "Hello", answer: "Hello" },
  { key: "How are you?", answer: "I'm fine" },
  { key: "Who are you?", answer: "I'm a robot" },
  { key: "How old are you?", answer: "You just created me" },
  { key: "Who created you?", answer: "The best JS developer, you!" },
];

let Question= prompt("Please Ask Question")

for(let ans of answers)
{

if(ans.key.toLowerCase() === Question.toLowerCase())

{
    console.log('You: ' +Question);
console.log('Bot:  '+ ans.answer);
break;
}
if(ans.key=== answers[answers.length-1].key)
{
    console.log('You: ' +Question);
    console.log('Bot :' + " I Dont Know");
}
}