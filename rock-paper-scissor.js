const player=["rock", "paper", "scissor" ];
const computer=["rock", "paper", "scissor"];
  const ans=Math.floor(Math.random()*3);
  const ans1=Math.floor(Math.random()*3);

  const randomchoice=player[ans];
  const randomchoice1=computer[ans1];

  const answer=randomchoice==randomchoice1 ? "It is a tie!": (randomchoice=="rock" && randomchoice1=="scissor") 
    || (randomchoice=="paper" && randomchoice1=="rock") ||
  ( randomchoice=="scissor" && randomchoice1=="paper") ? "player win" :" player lose";
  console.log(answer);
