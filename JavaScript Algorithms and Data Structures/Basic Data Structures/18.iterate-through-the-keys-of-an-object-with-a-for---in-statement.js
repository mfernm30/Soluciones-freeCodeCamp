function countOnline(usersObj) {
  // Only change code below this line
  let numOnlineUsers=0;
  for(let user in usersObj){
    if(usersObj[user].online==true) numOnlineUsers++;
  }
  return numOnlineUsers;
  // Only change code above this line
}