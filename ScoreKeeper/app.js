let p1 = {
    score: 0,
    name: document.querySelector('#p1Name'),
    label: document.querySelector('#p1NameLabel'),
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

let p2 = {
    score: 0,
    name: document.querySelector('#p2Name'),
    label: document.querySelector('#p2NameLabel'),
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

let playButton = document.querySelector('#play');
let resetButton = document.querySelector('#reset');
let winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player,opponent){
    if (!isGameOver) {
           player.score += 1;
           if (player.score === winningScore) {
               isGameOver = true;
               player.display.classList.add('has-text-success');
               opponent.display.classList.add('has-text-danger');
               player.button.disabled = true;
               opponent.button.disabled = true;
           }
           player.display.textContent = player.score; 
       }
}

function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2)
})

p2Button.addEventListener('click', function(){
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', function(){
    window.location.reload();
    reset();
})

playButton.addEventListener('click', function(){
    playButton.remove();
    p1.label.append(" " + p1.name.value + " Let's Play");
    p1.name.remove();
    p2.label.append(" " + p2.name.value + " Let's Play");
    p2.name.remove();
    p1.button.innerText = "+1 " + p1.name.value;
    p2.button.innerText = "+1 " + p2.name.value; 
    p1.button.disabled = false;
    p2.button.disabled = false;
})