const nebula = document.querySelector('.nebula')
const stars = document.querySelector('.stars')
const scoreBoard = document.querySelector('.scoreBoard')
const timer = document.querySelector('.time')
const pause = document.querySelector('.pause')
const player = document.querySelector('.player')
const pauseScreen = document.querySelector('.pauseScreen')
const pauseContainer = pauseScreen.querySelector('.pauseContainer')
const resume = pauseContainer.querySelector('.resume')
const menu = pauseContainer.querySelector('.menu')
const changeShip = pauseContainer.querySelector('.changeShip')
const shipR = changeShip.querySelector('.R')
const shipB = changeShip.querySelector('.B')
const shipG = changeShip.querySelector('.G')
let backgroundScroll = 0
let score = 0
let time = 0
let paused = false

{
    //==Varriable dans le scope==
    const playerInfo =
{
    top: 90,
    left: 50,
    speedY: 0.8,
    speedX: 0.4
}
    // ==========================
    document.onkeydown = function(e)
    {
        // console.log(e)
        // Check Z key status
        if(e.keyCode === 90)
        {
            // console.log('UP')
            playerInfo.top -= playerInfo.speedY
            changePlayerPosition()
        }
        // Check S key status
        else if(e.keyCode === 83)
        {
            // console.log('DOWN')
            playerInfo.top += playerInfo.speedY
            changePlayerPosition()
        }
        // Check Q key status
        else if(e.keyCode === 81)
        {
            // console.log('LEFT')
            playerInfo.left -= playerInfo.speedX
            changePlayerPosition()
        }
        // Check D key status
        else if(e.keyCode === 68)
        {
            // console.log('RIGHT')
            playerInfo.left += playerInfo.speedX
            changePlayerPosition()
        }

    }
    // Write the new player postion into the CSS
    function changePlayerPosition()
    {
        document.querySelector('.player').style.top = `${playerInfo.top}vh`
        document.querySelector('.player').style.left = `${playerInfo.left}vw`
    }
}


// ========== Change ship design - not finishd ======

shipR.addEventListener('click',() =>
{
    player.style.background = `url(./sprites/vaisseaux/joueur/R_1.png`
    pauseScreen.style.display = 'none'
    paused = false
})

shipB.addEventListener('click',() =>
{
    player.style.background = `url(./sprites/vaisseaux/joueur/B_1.png`
    pauseScreen.style.display = 'none'
    paused = false
})

shipG.addEventListener('click',() =>
{
    player.style.background = `url(./sprites/vaisseaux/joueur/G_1.png`
    pauseScreen.style.display = 'none'
    paused = false
})

//==============================// W.I.P //============================================

// //====== Stop game when click on pause button
// pause.addEventListener('click', () =>
// {
//     pauseScreen.style.display = `flex`
//     resume.style.display = 'flex'
//     menu.style.display = 'flex'
//     paused = true
// })
//
// //====== Resume game when click on resume button
// resume.addEventListener('click', () =>
// {
//     pauseScreen.style.display = 'none'
//     resume.style.display = 'none'
//     menu.style.display = 'none'
//     paused = false
// })
//==============================// W.I.P //============================================

//====== Scrolling of backgrounds images and time counter
window.setInterval(function()
{
if (paused == false)
    {
        backgroundScroll += 20
        time += 1
        nebula.style.paddingTop = `${backgroundScroll}px`
        stars.style.paddingTop = `${backgroundScroll*3}px`
        timer.value = `${time}s  `
    }
}, 1000)
