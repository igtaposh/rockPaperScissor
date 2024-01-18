let btns = document.querySelectorAll('#images button');
let comScore = document.getElementById('com-score')
let youScore = document.getElementById('you-score')
let result = document.getElementById('result')
let comRes = document.getElementById('com-res')
let calRes = document.getElementById('cal-res')
let youRes = document.getElementById('you-res')


btns[0].addEventListener('click',()=>{
  gameLogic('rock')
})
btns[1].addEventListener('click',()=>{
  gameLogic('paper')
})
btns[2].addEventListener('click', () => {
  gameLogic('scissors')
})



  let com = 0;
  let you = 0;
  
const gameLogic = (input)=>{
  let random = Math.random();
  let comMove;
  
  if (random <= 0.3) {
    comMove = 'rock';
  }
  else if (random <= 0.6) {
    comMove = 'scissors'
  }
  else {
    comMove = 'paper'
  }
  
  
  if (input == 'rock') {
    if (comMove == 'rock') {
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'DRAW';
      calRes.classList.add('draw')
      calRes.classList.remove('win')
      calRes.classList.remove('lose')
    }
    else if (comMove == 'paper') {
      com++
      comScore.innerHTML = com;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU LOSE'
      calRes.classList.add('lose')
      calRes.classList.remove('draw')
      calRes.classList.remove('win')
      
    }
    else if (comMove == 'scissors') {
      you++
      youScore.innerHTML = you;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU WIN'
      calRes.classList.add('win')
      calRes.classList.remove('draw')
      calRes.classList.remove('lose')
    }
  }
  
  else if (input == 'paper') {
    if (comMove == 'rock') {
      you++
      youScore.innerHTML = you;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU WIN'
      calRes.classList.add('win')
      calRes.classList.remove('draw')
      calRes.classList.remove('lose')
    }
    else if (comMove == 'paper') {
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'DRAW'
      calRes.classList.remove('win')
      calRes.classList.add('draw')
      calRes.classList.remove('lose')
    }
    else if (comMove == 'scissors') {
      com++
      comScore.innerHTML = com;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU LOSE'
      calRes.classList.remove('win')
      calRes.classList.remove('draw')
      calRes.classList.add('lose')
    }
  }
  
  else if (input == 'scissors') {
    if (comMove == 'rock') {
      com++
      comScore.innerHTML = com;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU LOSE'
      calRes.classList.remove('win')
      calRes.classList.remove('draw')
      calRes.classList.add('lose')
    }
    else if (comMove == 'paper') {
      you++
      youScore.innerHTML = you;
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'YOU WIN'
      calRes.classList.add('win')
      calRes.classList.remove('draw')
      calRes.classList.remove('lose')
    }
    else if (comMove == 'scissors') {
      result.style.display = 'flex';
      youRes.innerText = input;
      comRes.innerText = comMove;
      calRes.innerHTML = 'DRAW'
      calRes.classList.remove('win')
      calRes.classList.add('draw')
      calRes.classList.remove('lose')
    }
  }
  }
  
  