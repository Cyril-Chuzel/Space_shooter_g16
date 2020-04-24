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

//================== Move and shoot player =================
{
    const playerInfo =
    {
        score : 0,
        timeElapsed: 0,
        top: 90,
        left: 50,
        speedY: 0.6,
        speedX: 0.3
    }
    const keyPress =
    {
        up:false,
        down:false,
        left:false,
        right:false,
        space:false
    }
    const shoutingSpeed = 1
    const missileSpeed = 1
    const missiles = []
    // Check for key press and update keyPress constant
    document.onkeydown = function(ePressed)
    {
        if(ePressed.keyCode === 90 || ePressed.keyCode === 38)
        {
            keyPress.up = true
        }
        else if(ePressed.keyCode === 83 || ePressed.keyCode === 40)
        {
            keyPress.down = true
        }
        else if(ePressed.keyCode === 81 || ePressed.keyCode === 37)
        {
            keyPress.left = true
        }
        else if(ePressed.keyCode === 68 || ePressed.keyCode === 39)
        {
            keyPress.right = true
        }
        else if(ePressed.keyCode === 32)
        {
            keyPress.space = true
        }

        // console.log(keyPress)
    }
    // Check for key release and update keyPress constant
    document.onkeyup = function(eRelease)
    {
        if(eRelease.keyCode === 90 || eRelease.keyCode === 38)
        {
            keyPress.up = false
        }
        else if(eRelease.keyCode === 83 || eRelease.keyCode === 40)
        {
            keyPress.down = false
        }
        else if(eRelease.keyCode === 81 || eRelease.keyCode === 37)
        {
            keyPress.left = false
        }
        else if(eRelease.keyCode === 68 || eRelease.keyCode === 39)
        {
            keyPress.right = false
        }
        else if(eRelease.keyCode === 32)
        {
            keyPress.space = false
        }
        // console.log(keyPress)
    }
    // Update player position by changing playerInfo.top and playerInfo.left (update every 10ms)
    function controleUpdate()
    {
        setTimeout(controleUpdate, 10)
        if(keyPress.up == true)
        {
            playerInfo.top -= (playerInfo.speedY - 0.3)
            changePlayerPosition()
        }
        if(keyPress.down == true)
        {
            playerInfo.top += playerInfo.speedY
            changePlayerPosition()
        }
        if(keyPress.left == true)
        {
            playerInfo.left -= playerInfo.speedX
            changePlayerPosition()
        }
        if(keyPress.right == true)
        {
            playerInfo.left += playerInfo.speedX
            changePlayerPosition()
        }

    }
    controleUpdate()


    function changePlayerPosition()
    {
        // console.log(playerInfo)
        document.querySelector('.player').style.top = `${playerInfo.top}vh`
        document.querySelector('.player').style.left = `${playerInfo.left}vw`
    }
    // Check for player position and teleport player if out the map
    function borderCheck()
    {
        setTimeout(borderCheck, 10)
        if(playerInfo.top <= 0)
        {
            playerInfo.top = 90
        }
        else if(playerInfo.top >= 92)
        {
            playerInfo.top = 91
        }
        else if(playerInfo.left <= 0)
        {
            playerInfo.left = 100
        }
        else if(playerInfo.left >= 100)
        {
            playerInfo.left = 0
        }
    }
    //====== shoot when press space bar - unfinished ============
    function firingCheck()
    {
        setTimeout(firingCheck, 350)
        if(keyPress.space === true)
        {
            // console.log('FIRE')
            missiles.push({top: playerInfo.top + 5.30,left: playerInfo.left + 2.60,speedY: missileSpeed})
            // console.log(missiles)
        }
    }
    firingCheck()

    borderCheck()
    // GameLoop check enemy and missile status
    function gameLoop()
    {
        setTimeout(gameLoop, 1)
    }
    gameLoop()
}

// ========== Change ship design - unfinished =======================================
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
        //==== randomised ennemies spawning system - unfinished =====
        if (time%5 == 0)
        {
            random = (Math.floor(Math.random()*(ennemiesSpawn.length+1)))
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
        for (k = 0; k < (ennemiesSpawn.length-1); k ++)
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
