let you=0,bot=0;

for(let i=0;i<10;i++){
  let x = Math.floor(Math.random() * 3);
  
  let y=prompt("your turn");
  console.log("you choose "+y);
  if(x==1){
    console.log("bot choose snake")
  }
  else if(x==2){
    console.log("bot choose water")
  }
  else{
    console.log("bot choose gun")
  }
  if(x==1){
    if(y.startsWith("w")){
      bot++;
    }
    else if(y.startsWith("g")){
      you++;
    }
  }
  else if(x==2){
    if(y.startsWith("s")){
      you++;
    }
    else if(y.startsWith("g")){
      bot++;
    }
  }
  else{
    if(y.startsWith("s")){
      bot++;
    }
    else if(y.startsWith("w")){
      you++;
    }
  }
  console.log("you : "+you+" bot : "+bot)
  
}


if(you>bot){
  console.log("you won the game");
}
else if(bot>you){
  console.log("bot won the game");
}
else{
  console.log("draw")
}
