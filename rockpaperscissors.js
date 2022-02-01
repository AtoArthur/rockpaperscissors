const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'){
      return userInput;
    }else if(userInput === 'paper'){
      return userInput;
    }else if(userInput === 'scissors'){
      return userInput;
    }else if(userInput === 'bomb'){
      return userInput; 
    }else{
      console.log('Error!');
    }
  };
  console.log(getUserChoice(''));
  
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
      default:
      'Error!';
    }
  };
  console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return "Game is a tie";
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Sorry you lost!';
      }else{
        return 'User won!';
      }
    }
    /*if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User won';
      }else{
        return 'Computer won!';
      }
    }*/
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'You lost!';
      }else{
        return 'Kawabanga!!';
      }
    }
    if(userChoice ==='scissors'){
      if(computerChoice === 'rock'){
        return 'Sorry, Try Again';
      }else{
        return 'Sweet Christmas';
      }
    }
    /*if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'You Won!';
      }else{
        return 'Try Again';
      }
    }*/
    if(userChoice === 'bomb'){
      return 'Straight Win!';
    }
  };
  console.log(determineWinner('paper', 'scissors'));
    
    function playGame(){
      const userChoice = getUserChoice('rock');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw: ' + computerChoice);
      console.log(userChoice, computerChoice);
    };
    playGame();
