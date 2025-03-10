document.addEventListener('DOMContentLoaded', function() {
let userChoice;
let computerChoice;
const options=["rock", "paper", "scissors"];
function playGame(userChoice)
{
    console.log(userChoice);
    computerChoice=options[Math.trunc(Math.random()*3)];
    console.log(computerChoice);
    document.getElementById("computerChoiceOutput").textContent=computerChoice;
    if (userChoice=="rock" && computerChoice=="rock")
    {
        document.getElementById("winnerOutput").textContent="Tie";
    }
    else if (userChoice=="rock" && computerChoice=="paper")
    {
        document.getElementById("winnerOutput").textContent="The Computer";
    }
    else if (userChoice=="rock" && computerChoice=="scissors")
    {
        document.getElementById("winnerOutput").textContent="You";
    }
    else if (userChoice=="paper" && computerChoice=="rock")
    {
        document.getElementById("winnerOutput").textContent="You";
    }
    else if (userChoice=="paper" && computerChoice=="paper")
        {
            document.getElementById("winnerOutput").textContent="Tie";
        }
    else if (userChoice=="paper" && computerChoice=="scissors")
        {
            document.getElementById("winnerOutput").textContent="The Computer";
        }
    else if (userChoice=="scissors" && computerChoice=="rock")
        {
            document.getElementById("winnerOutput").textContent="The Computer";
        }
    else if (userChoice=="scissors" && computerChoice=="paper")
        {
            document.getElementById("winnerOutput").textContent="You";
        }
    else if (userChoice=="scissors" && computerChoice=="scissors")
        {
            document.getElementById("winnerOutput").textContent="Tie";
        }
    console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
}
document.getElementById("rockButton").addEventListener('click', function(){playGame("rock")});
document.getElementById("paperButton").addEventListener('click', function(){playGame("paper")});
document.getElementById("scissorsButton").addEventListener('click', function(){playGame("scissors")});
document.getElementById("playAgainButton").addEventListener('click', function(){
                                                                                document.getElementById("computerChoiceOutput").textContent="";
                                                                                document.getElementById("winnerOutput").textContent="";
                                                                                this.style.backgroundColor="purple";
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        playGame("rock");
    } else if (event.key === 'p') {
        playGame("paper");
    } else if (event.key === 's') {
        playGame("scissors");
    }
});
});