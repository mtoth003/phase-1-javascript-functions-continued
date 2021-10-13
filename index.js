// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (task = "go to the office") => `This Monday, I will ${task}.` 

function wrapAdjective(flair = "*") {
    return function inner(adj = "Special") {
         return `You are ${flair}${adj}${flair}!`;
    }
}