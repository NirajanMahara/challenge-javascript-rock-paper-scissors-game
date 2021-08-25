// dictionary object | key: value pairing
const handOptions = {
  rock: '/assets/Rock.png',
  paper: '/assets/Paper.png',
  scissors: '/assets/Scissors.png',
};

const pickUserHand = (hand) => {
  console.log(hand);

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

const pickComputerHand = () => {
  let hands = ['rock', 'paper', 'scissors'];

  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  console.log(cpHand);

  // set computer pick image
  document.getElementById('computerPickImage').src = handOptions[cpHand];
};
