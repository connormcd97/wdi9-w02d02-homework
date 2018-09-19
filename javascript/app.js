const cards=[
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle",
    damage: 40
  }
]
const getRandomCard=(obj)=>{
  while(true){
    let index = Math.floor(Math.random() * obj.length-1) + 1;
    if(!obj[index].inPlay){
      obj[index].inPlay=true;

    return obj[index];
  }

}



}
gameCheck=(obj)=>{
  let num=0;
  for(prop in obj){

    if(!obj[prop].inPlay){

      num++;
}
}
if (num<6){
  return false;
}
else{
  return true;
}
}
class Player{

  constructor(name,arr){
    this.name=name;
    this.cards=arr;
    this.score=0;
    this.roundW=0;
    this.cardInPlay;
  }
  showHand(){
    let index = Math.floor(Math.random() *this.cards.length-1) + 1;
    console.log(`${this.name} played ${this.cards[index].name}  It has a damage of ${this.cards[index].damage}`);
    this.cardInPlay=this.cards[index].damage;
    this.cards.splice(index,1);

  }
}
let deals=0;
let check=true;

const playerOne =new Player('Ash',[getRandomCard(cards),getRandomCard(cards),getRandomCard(cards)]);
const playerComp=new Player('Brock',[getRandomCard(cards),getRandomCard(cards),getRandomCard(cards)]);
while(check==true){

  playerOne.showHand();
  playerComp.showHand();
  if(playerOne.cardInPlay>playerComp.cardInPlay){
    playerOne.score++;
    console.log(`Score:${playerOne.name}:${playerOne.score}, ${playerComp.name}:${playerComp.score}`);
  }
  else if(playerOne.cardInPlay<playerComp.cardInPlay){
    playerComp.score++;
    console.log(`Score: ${playerOne.name}:${playerOne.score}, ${playerComp.name}:${playerComp.score}`);
  }
  else{
    console.log(`Score: ${playerOne.name}:${playerOne.score}, ${playerComp.name}:${playerComp.score}`);
  }


if(playerOne.cards.length==0&&playerOne.cards.length==0){
    if(playerOne.score>playerComp.score){
    playerOne.roundW++;
    console.log(`Rounds Won: ${playerOne.name}:${playerOne.roundW+1}, ${playerComp.name}:${playerComp.score}`);
  }
  else if(playerOne.score<playerComp.score){
  playerComp.roundW++;
  console.log(`Rounds Won: ${playerOne.name}:${playerOne.roundW}, ${playerComp.name}:${playerComp.roundW+1}`);
}
  else{
    console.log(`Rounds Won: ${playerOne.name}:${playerOne.roundW}, ${playerComp.name}:${playerComp.roundW}`);
  }
  playerOne.score=0;
  playerComp.score=0;

  if(gameCheck(cards)){
    for(i=0;i<3;i++){
      playerOne.cards.push(getRandomCard(cards));
      playerComp.cards.push(getRandomCard(cards));

    }

  }
    else{
      check=gameCheck(cards);
    }


}

}
console.log("gameOver");
