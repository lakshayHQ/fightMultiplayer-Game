
   
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result') 
let p1NameDiv = document.getElementById('p1Name') 
let p2NameDiv = document.getElementById('p2Name') 
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.querySelector('#p2Health')


let updateGame = (p1,p2,gameState) => { 
 
p1HealthDiv.innerText = `${player1.health}`
p2HealthDiv.innerText = `${player2.health}`


if( player1.health <=0 ){
gameState.isOver = true

}
else if (player2.health <=0) {
gameState.isOver = true

}
else{
    
}
game.declareWinner(game.isOver,player1,player2)
}
class Player { 
constructor(name,health,attackDamage){
this.name = name
this.health = health
this.attackDmg = attackDamage}

strike(player,enemy,attackDmg) {
let  damageAmount = Math.floor(Math.random()*attackDmg)

 enemy.health -= damageAmount
 
updateGame(player,enemy,game)
}
heal(player){ 
let hpAmount = Math.floor(Math.random()*7)
if (player.health > 0 && player.health < 100){
    player.health +=hpAmount
    updateGame(player)
}

}
} 
 class Game { 
    constructor(){
    this.isOver = false 
   
    }
 declareWinner(isOver,p1,p2){
    let message;
  if (isOver = true && p1.health <= 0 ) { 
    message  = resultDiv.innerText=`${p2.name} Is Wins !`
   return  document.getElementById("victory").play()
  } 
  else if (isOver = true && p2.health <=0) {
    
   
     message  = resultDiv.innerText=`${p1.name} Is Wins !`
     return  document.getElementById("victory").play()
  }
  else{ 
         
  }
  
 }  
 reset (p1,p2){
  p1.health = 100;
  p2.health = 100;
  game.isOver = false;
  resultDiv.innerText = ""
 updateGame(player1,player2)
 }
 play(){
    while (!this.isOver) {
        player1.strike(player1,player2,player1.attackDmg) 
        player1.heal(player1)
        player2.strike(player2,player1,player2.attackDmg)
        player2.heal(player2)
       
      } 
      if (this.isOver = true) {
        game.declareWinner(game.isOver,player1,player2)
       
       }
 }
   
 }

// Player 1 Controls And Sounds 
// p1 Attack and Heal
document.addEventListener("keydown",function(e) {
    if (e.key == "q" && player2.health > 0 && game.isOver == false) {
       
       player1.strike(player1,player2,player1.attackDmg)

       let soundAttack2 =   document.getElementById("p1attack")
       soundAttack2.play() 
        
    } } )

    document.addEventListener('keydown',function (e){
        if(e.key == "a" && player2.health > 0 && game.isOver == false){
            player1.heal(player1) 
           let soundHeal1 =  document.getElementById("p1heal")
            soundHeal1.play()
        }
    })
    
     


// Player 2 Controls and Sounds

// p2 Attack and Heal
document.addEventListener("keydown",function(e) {
    if (e.key ==  "p" && player1.health > 0 && game.isOver == false) {
        player2.strike(player2,player1,player2.attackDmg)
       let soundAttack1 =  document.getElementById("p2attack")
        soundAttack1.play()
    } 
    else if(e.key == "l" && player1.health > 0 && game.isOver == false){
        player2.heal(player2)
        let soundHeal2 =  document.getElementById("p2heal")
        soundHeal2.play()
    }}

)



const  player1 = new Player("Lakshay",100,8 ) 

const  player2 = new Player("Chirag",100,8)


let game = new Game()
























