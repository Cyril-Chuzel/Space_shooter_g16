const player = document.querySelector('.player')
let playerTop = 0
let playerLeft = 0
const playerSpeed = 30

window.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowUp')
    {
        playerTop -= playerSpeed
        player.style.transform = `rotate(0deg)`
    }
    else if(event.code == 'ArrowRight')
    {
        playerLeft += playerSpeed
        player.style.transform = `rotate(90deg)`
    }
    else if(event.code == 'ArrowDown')
    {
        playerTop += playerSpeed
        player.style.transform = `rotate(180deg)`
    }
    else if(event.code == 'ArrowLeft')
    {
        playerLeft -= playerSpeed
        player.style.transform = `rotate(-90deg)`
    }
    player.style.top = `${playerTop}px`
    player.style.left = `${playerLeft}px`
})
