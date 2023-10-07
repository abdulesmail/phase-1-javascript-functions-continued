function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}


function wrapAdjective(visualHighlight) {
  return function(adjective) {
    return `You are ${visualHighlight}${adjective}${visualHighlight}!`;
  }
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
