// code your solution here
// implement a function called saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
//  Output:
console.log(saturdayFun()); 
console.log(saturdayFun('hike'));



// Define the mondayWork function
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  //output:
  console.log(mondayWork()); 
  console.log(mondayWork('work from home')); 


  //Implement a wrap adjective
  function wrapAdjective(flair = "special") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); 