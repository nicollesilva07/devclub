
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const roboScore = document.querySelector('#robo-score')


let humanNumberScore = 0 
let roboNumberScore = 0 

const playHuman = (HumanChoise) => {

    playTheGame(HumanChoise, playRobo())
}


const PLAY_OPTIONS = {
STONE: 'stone',
PAPER: 'paper',
SCISSORS: 'scissors'
}


const playRobo = () => {
    const options = [PLAY_OPTIONS.STONE, PLAY_OPTIONS.PAPER, PLAY_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return options[randomNumber]
}

const playTheGame = (human, robo) => {
    console.log('Humano: ' + human + " Maquina " + robo)

    if (human === robo) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === PLAY_OPTIONS.PAPER && robo === PLAY_OPTIONS.STONE) ||
        (human === PLAY_OPTIONS.STONE && robo === PLAY_OPTIONS.SCISSORS) ||
        (human === PLAY_OPTIONS.SCISSORS && robo === PLAY_OPTIONS.PAPER)
    ) {
        humanNumberScore++
        humanScore.innerHTML = humanNumberScore
        result.innerHTML  = "Você ganhou!" 
    } else {
        roboNumberScore++
        roboScore.innerHTML = roboNumberScore
        result.innerHTML = "Você perdeu!"
    }

}

