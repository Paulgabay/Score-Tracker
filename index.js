let homeScore = document.getElementById("homeScore")

homePoints = 0  
homeScore.innerText = homePoints

function homeFreeThrow(){
    homePoints += 1
    homeScore.innerText = homePoints
}

function homeBasket(){
    homePoints += 2
    homeScore.innerText = homePoints
}

function homeThree(){
    homePoints += 4
    homeScore.innerText = homePoints
}


let awayPoints = document.getElementById("awayScore")

awayPoints = 0  
awayScore.innerText = awayPoints

function awayFreeThrow(){
    awayPoints += 1
    awayScore.innerText = awayPoints
}

function awayBasket(){
    awayPoints += 2
    awayScore.innerText = awayPoints
}

function awayThree(){
    awayPoints += 3
    awayScore.innerText = awayPoints
}

function newGame(){
    awayPoints = 0  
    awayScore.innerText = awayPoints
    homePoints = 0
    homeScore.innerText = homePoints
}
