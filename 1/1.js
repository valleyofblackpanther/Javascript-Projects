// This is an immediately invoked function expression (IIFE). We 
// use it to prevent our code from leaking out in the global scope. This
//  has several benefits such as preventing players (if this were a game)
//   from accessing your variables directly and prevents your code from
//    colliding with someone else's code (such as a library or another
//      script on the website). The semicolon is there in case some other
//       code is loaded before ours and it doesn’t have a semicolon at the end
let colVal = [];








(function () {
  const canvas = document.getElementById("matrixEffect");
  const ctx = canvas.getContext("2d");
})(); 
