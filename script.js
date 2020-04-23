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

const ennemies = document.querySelector('.enemies')
const ennemi1 = ennemies.querySelector('.first')
const ennemi2 = ennemies.querySelector('.second')
const ennemi3 = ennemies.querySelector('.third')
const ennemi4 = ennemies.querySelector('.fourth')
const ennemi5 = ennemies.querySelector('.fifth')
const ennemi6 = ennemies.querySelector('.sixth')
const ennemi7 = ennemies.querySelector('.seventh')
const ennemi8 = ennemies.querySelector('.eigth')

let backgroundScroll = 0
let score = 0
let time = 0
let paused = false
let random = 0

let ennemiP1 = 0
let ennemiP2 = 0
let ennemiP3 = 0
let ennemiP4 = 0
let ennemiP5 = 0
let ennemiP6 = 0
let ennemiP7 = 0
let ennemiP8 = 0

const ennemiesSpawn = [ennemi1, ennemi2, ennemi3, ennemi4, ennemi5, ennemi6, ennemi7, ennemi8]
const ennemiesList = ['./sprites/vaisseaux/enemis/ennemi-1.png' , './sprites/vaisseaux/enemis/ennemi-2.png' , './sprites/vaisseaux/enemis/ennemi-3.png' , './sprites/vaisseaux/enemis/ennemi-4.png' , './sprites/vaisseaux/enemis/ennemi-5.png' , './sprites/vaisseaux/enemis/ennemi-6.png' , './sprites/vaisseaux/enemis/ennemi-7.png' , './sprites/vaisseaux/enemis/ennemi-8.png']
const ennemiesPosition = [ennemiP1, ennemiP2, ennemiP3, ennemiP4, ennemiP5, ennemiP6, ennemiP7, ennemiP8]

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


// ========== Change ship design - not finishd =======================================
// shipR.addEventListener('click',() =>
// {
//     player.style.background = `url(./sprites/vaisseaux/joueur/R_1.png`
//     pauseScreen.style.display = 'none'
//     paused = false
// })
//
// shipB.addEventListener('click',() =>
// {
//     player.style.background = `url(./sprites/vaisseaux/joueur/B_1.png`
//     pauseScreen.style.display = 'none'
//     paused = false
// })
//
// shipG.addEventListener('click',() =>
// {
//     player.style.background = `url(./sprites/vaisseaux/joueur/G_1.png`
//     pauseScreen.style.display = 'none'
//     paused = false
// })
//==============================// W.I.P //============================================

//====== Stop game when click on pause button
pause.addEventListener('click', () =>
{
    pauseScreen.style.display = `flex`
    resume.style.display = 'flex'
    menu.style.display = 'flex'
    paused = true
})

//====== Resume game when click on resume button
resume.addEventListener('click', () =>
{
    pauseScreen.style.display = 'none'
    resume.style.display = 'none'
    menu.style.display = 'none'
    paused = false
})

//====== Time based operations
window.setInterval(function()
{
    if (paused == false)
    {
        // scrolling of the backgrounds and time counter
        backgroundScroll += 20
        time ++
        nebula.style.paddingTop = `${backgroundScroll}px`
        stars.style.paddingTop = `${backgroundScroll*3}px`
        timer.value = `${time}s  `
        //randomised ennemies spawning system
        if (time%5 == 0)
        {
            random = (Math.floor(Math.random()*9))
            if (random != 0)
            {
                for (let i = 0; i < random ; i ++)
                {
                    let j = (Math.floor(Math.random()*(random-1)))
                    ennemiesSpawn[j].setAttribute('src', ennemiesList[(Math.floor(Math.random()*8))])
                    ennemiesSpawn[j].style.visibility = `visible`
                }
            }
        }
        for (k = 0; k < 7; k ++)
        {
            if (ennemiesSpawn[k].style.visibility == `visible`)
            {
                ennemiesPosition[k] += 4
                ennemiesSpawn[k].style.marginTop = `${ennemiesPosition[k]}vh`
                if (ennemiesPosition[k] > 90)
                {
                    ennemiesSpawn[k].style.visibility = `hidden`
                    ennemiesPosition[k] = 0
                    ennemiesSpawn[k].style.marginTop = `${ennemiesPosition[k]}vh`
                }
            }
        }
    }
}, 1000)
