const cards=[
  {
    name: "Bulbasaur",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/DP3/DP3_EN_77.png"
  }, {
    name: "Caterpie",
    damage: 40,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_56.png"
  }, {
    name: "Charmander",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_57.png"
  }, {
    name: "Clefairy",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/XY3/XY3_EN_69.png"
  }, {
    name: "Jigglypuff",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/SM4/SM4_EN_71.png"
  }, {
    name: "Mankey",
    damage: 30,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/DP4/DP4_EN_79.png"
  }, {
    name: "Meowth",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/EX4/EX4_EN_42.png"
  }, {
    name: "Nidoran - female",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/XY5/XY5_EN_66.png"
  }, {
    name: "Nidoran - male",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_43.png"
  }, {
    name: "Oddish",
    damage: 40,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/SM3/SM3_EN_4.png"
  }, {
    name: "Pidgey",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/HGSS4/HGSS4_EN_71.png"
  }, {
    name: "Pikachu",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/BWP/BWP_EN_BW54.png"
  }, {
    name: "Poliwag",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/DP3/DP3_EN_77.png"
  }, {
    name: "Psyduck",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/DP3/DP3_EN_100.png"
  }, {
    name: "Rattata",
    damage: 30,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/SM1/SM1_EN_76.png"
  }, {
    name: "Squirtle",
    damage: 60,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/PL1/PL1_EN_96.png"
  }, {
    name: "Vulpix",
    damage: 50,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/EX9/EX9_EN_72.png"
  }, {
    name: "Weedle",
    damage: 40,
    image:"https://assets.pokemon.com/assets/cms2/img/cards/web/PL2/PL2_EN_86.png"
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
    this.index=0;

  }

makeBoard(){
  for(let index=0;index<this.cards.length;index++){


  $('.column').append(`<img class="image" id=im${index} src="${this.cards[index].image}" style="width:200px;height:300px;">`);

  $('.column').append(`<button  class="gameChoice" id=${index} style="text-align:center;"' >${this.cards[index].name}<br>with ${this.cards[index].damage}damage</button>`);

  }


    $(document).ready(function(){

    $(".gameChoice").click(function(){
    	  playerOne.chooseHand(this.id);
    });


    });


}

  showHand(){
    let rand= Math.floor(Math.random() *this.cards.length-1) + 1;

    this.cardInPlay=this.cards[rand].damage;
    this.cards.splice(rand,1);
    }
  chooseHand(index){

    this.cardInPlay=this.cards[index].damage;


    for(let i=0;i<this.cards.length;i++){


      $(`#im${i}`).remove();
      $(`#${i}`).remove();


    }

    this.cards.splice(index,1);
    gamePlay(playerOne,playerComp);


}
}
function scoreBoard(){

      $('.score').append(`<br><h2>Score:${playerOne.name}:${playerOne.score}, ${playerComp.name}:${playerComp.score}</h2>`);
      $('.score').append(`<br><h2>Rounds Won: ${playerOne.name}:${playerOne.roundW}, ${playerComp.name}:${playerComp.roundW}</h2>`);

    //  $('.column').remove();

  }
function gamePlay(playerOne,playerComp){
  console.log(playerOne);

  if(playerOne.cardInPlay>playerComp.cardInPlay){

    playerOne.score++;


  }
  else if(playerOne.cardInPlay<playerComp.cardInPlay){

    playerComp.score++;



  }
;
if(playerOne.cards.length==0&&playerComp.cards.length==0){
    if(playerOne.score>playerComp.score){
    playerOne.roundW++;
  }
  else if(playerOne.score<playerComp.score){
  playerComp.roundW++;
}

  playerOne.score=0;
  playerComp.score=0;


  if(gameCheck(cards)){
    for(i=0;i<3;i++){
      console.log('hi');
      playerOne.cards.push(getRandomCard(cards));
      playerComp.cards.push(getRandomCard(cards));


    }


  }
  else {
  
  }

}
scoreBoard();
playerComp.showHand();
playerOne.makeBoard();

}



const playerOne =new Player('Ash',[getRandomCard(cards),getRandomCard(cards),getRandomCard(cards)]);
const playerComp=new Player('Brock',[getRandomCard(cards),getRandomCard(cards),getRandomCard(cards)]);
playerComp.showHand();
playerOne.makeBoard();
