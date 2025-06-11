// Code your solutions 
function writeCards(names, eventName) {
      const messages = [];
  for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  
  return messages;


}
// count down
function countDown(start) {
      while (start >= 0) {
    console.log(start);
    start--;
  }


}

