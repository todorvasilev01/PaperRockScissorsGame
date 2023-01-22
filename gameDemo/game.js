function solve(){
    const rock="Rock";
    const paper="Paper";
    const scissors="Scissors";

    
    
    let PlayerScore=0;
    let ComputerScore=0;
    for(let i=1;i<=10;i++){
        
        console.log(`Game ${i}`);

        let playerRandomNumber=Math.floor(Math.random()*3)+1;
        let playerTurn="";
        switch(playerRandomNumber){
            case 1:playerTurn=rock;break;
            case 2:playerTurn=paper;break;
            case 3:playerTurn=scissors;break;
        }
        console.log(`You choose ${playerTurn}`);


        let computerRandomNumber=Math.floor(Math.random()*3)+1;
        let computerTurn="";
    
        switch(computerRandomNumber){
            case 1:computerTurn=rock;break;
            case 2:computerTurn=paper;break;
            case 3:computerTurn=scissors;break;
        }
        
        console.log(`The computer chooses ${computerTurn}`);
        if((playerTurn==rock && computerTurn===scissors) || 
           (playerTurn === paper && computerTurn === rock) || 
           (playerTurn === scissors && computerTurn===paper)){
           
            PlayerScore+=50;
            ComputerScore-=15;
            console.log(`You win!`);
            
        }else if((playerTurn==scissors && computerTurn==rock)|| 
                 (playerTurn==rock && computerTurn==paper) || 
                 (playerTurn==paper && computerTurn==scissors)){
            console.log(`You lose. The computer win!`);
            PlayerScore-=15;
            ComputerScore+=50;
        }else if((playerTurn==scissors && computerTurn==scissors)|| 
                 (playerTurn==rock && computerTurn==rock) || 
                 (playerTurn==paper && computerTurn==paper)){
            console.log(`This game was a draw!`)
            PlayerScore+=25;
            ComputerScore+=25;

        }
        
        
       
    }
    console.log(`Your Score: ${PlayerScore}`);
    console.log(`Computer Score: ${ComputerScore}`);

    if(PlayerScore>ComputerScore){
        console.log(`Final result: You won by ${PlayerScore-ComputerScore} score more! `)
    }else if(PlayerScore<ComputerScore){
        console.log(`Final result: Computer won by ${ComputerScore-PlayerScore} score more! `)
    }
    
}
solve()