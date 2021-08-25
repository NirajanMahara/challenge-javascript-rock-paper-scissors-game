// dictionary object | key: value pairing
const handOptions = {
  rock: '/assets/Rock.png',
  paper: '/assets/Paper.png',
  scissors: '/assets/Scissors.png',
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log('👨‍🎓', hand);

  // hide the current page
  let hands = document.querySelector('.hands');
  hands.style.display = 'none';

  // show the next page with the hand we picked
  let contest = document.querySelector('.contest');
  contest.style.display = 'flex';

  // set user pick image
  document.getElementById('userPickImage').src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ['rock', 'paper', 'scissors'];

  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  console.log('💻', cpHand);

  // set computer pick image
  document.getElementById('computerPickImage').src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == 'rock' && cpHand == 'rock') {
    setDecision("It's a tie!");
  }
  if (userHand == 'rock' && cpHand == 'paper') {
    setDecision('YOU LOSE!');
  }
  if (userHand == 'rock' && cpHand == 'scissors') {
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
  if (userHand == 'paper' && cpHand == 'rock') {
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
  if (userHand == 'paper' && cpHand == 'paper') {
    setDecision("It's a tie!");
  }
  if (userHand == 'paper' && cpHand == 'scissors') {
    setDecision('YOU LOSE!');
  }
  if (userHand == 'scissors' && cpHand == 'rock') {
    setDecision('YOU LOSE!');
  }
  if (userHand == 'scissors' && cpHand == 'paper') {
    setDecision('YOU WIN!');
    setScore(SCORE + 1);
  }
  if (userHand == 'scissors' && cpHand == 'scissors') {
    setDecision("It's a tie!");
  }
};

const setDecision = (decision) => {
  console.warn('🎮', decision);

  document.querySelector('.decision h1').innerText = decision;
};

const setScore = (newScore) => {
  console.log('🎯', newScore);

  document.querySelector('.score h1').innerText = newScore;
};
