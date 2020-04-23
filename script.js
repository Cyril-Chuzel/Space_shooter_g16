const nebula = document.querySelector('.nebula')
const stars = document.querySelector('.stars')
const scoreBoard = document.querySelector('.scoreBoard')
const timer = document.querySelector('.time')
const pause = document.querySelector('.pause')
const pauseContainer = document.querySelector('.pauseContainer')
const resume = pauseContainer.querySelector('.resume')
const pauseScreen = document.querySelector('.pauseScreen')
let backgroundScroll = 0
let score = 0
let time = 0
let paused = false

// Background effects
pause.addEventListener('click', () =>
{
    pauseScreen.style.display = `flex`
    paused = true

resume.addEventListener('click', () =>
{
    pauseScreen.style.display = 'none'
    paused = false
})

})

    window.setInterval(function()
    {
    if (paused == false)
        {
            backgroundScroll += 20
            time += 1
            nebula.style.paddingTop = `${backgroundScroll}px`
            stars.style.paddingTop = `${backgroundScroll*3}px`
            timer.value = `${time}s  `
            // console.log(background.style.paddingTop)
        }
    }, 1000)

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

        console.log(keyPress)
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
        console.log(keyPress)
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
        console.log(playerInfo)
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
    function firingCheck()
    {
        setTimeout(firingCheck, 350)
        if(keyPress.space === true)
        {
            console.log('FIRE')
            missiles.push({top: playerInfo.top + 5.30,left: playerInfo.left + 2.60,speedY: missileSpeed})
            console.log(missiles)
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