//Setup variables for the player's and computer's input
let playerChoice
let compChoice 
const compArray = ['じゃん', 'けん', 'ぽん'];

let gameRound = 1;
let playerScore = 0;
let computerScore = 0;

const content = document.querySelector('.content');
const inputs = document.querySelectorAll('button');
const score = document.querySelector('.score');
const round = document.querySelector('.round');
const selection = document.querySelector('.selection');
//endVariables

inputs.forEach((button) =>{
    button.addEventListener('click', setUp);
});

function setUp(e){
    let randomIndex = Math.floor(Math.random() * compArray.length); 
    compChoice = compArray[randomIndex]; //Get the Computers choice based off it being randomly selected from an array.
    playerChoice = e.srcElement.id; //Get the players selection based off the ID of the button that they pressed.

    selection.innerText = `プレイヤーは ${playerChoice}を選んで コンピュタは ${compChoice}を選んだ。`;

    playRound(playerChoice, compChoice);
}

function playRound(playerChoice, compChoice){
    //Stop to see if the game is a draw. If so, start again. If not, move on.
    if(compChoice === playerChoice){
        //round.innerText = 'この回はあいこ。もう一度選んでね〜';
        round.innerText = 'あいこ'
    }
    else if(compChoice !== playerChoice){
        switch(playerChoice){
            case 'じゃん':
                if(compChoice === 'けん'){
                    game('win');
                }
                else{
                    game('lose');
                }
                break;
            case 'けん':
                if(compChoice === 'じゃん'){
                    game('win');
                }
                else{
                    game('lose');
                }
                break;
            case 'ぽん':
                if(compChoice === 'ぽん'){
                    game('win');
                }
                else{
                    game('lose');
                }
                break;
        }
    }

function game(outcome){
    if(outcome === 'win'){
        //round.innerText = `この回はプレイヤーの勝ち. 次の回を選んでね〜。`;
        round.innerText = `勝ち`
        gameRound++;
        playerScore++;
    }
    else{
        //round.innerText = `この回はコンピュターの勝ち. 次の回を選んでね〜。`;
        round.innerText = `負け`;
        gameRound++;
        computerScore++;
    }
    score.innerText = `プレイヤー  ${playerScore} ・ コンピュタ ${computerScore}`;

    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            endGame('プレイヤー');
        }
        else{
            endGame('コンピュター');
        }
    }

    function endGame(winner){
        content.innerText = '';

        const end = document.createElement('div');
        end.className = 'end-screen';
        const outcome = document.createElement('div');
        const newGame = document.createElement('div');
        const again = document.createElement('button');
        const buttonText = document.createTextNode('もう１回');
        again.appendChild(buttonText);
        again.className = 'victory button';
        outcome.className = 'newGame';

        newGame.classList.add('newGame');
        outcome.textContent = `${winner} の勝ち。`
        newGame.textContent = 'もう１回あそぶ？';

        end.appendChild(outcome);
        end.appendChild(newGame);
        end.appendChild(again);
        content.appendChild(end);

        again.onclick = function (){ console.log(window.location.reload());};
        }
    }
}