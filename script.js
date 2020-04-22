const nebula = document.querySelector('.nebula')
const stars = document.querySelector('.stars')
let background_scroll = 0

console.log(nebula)
console.log(stars)

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

window.setInterval(function()
{
    background_scroll += 10
    nebula.style.paddingTop = `${background_scroll}px`
    stars.style.paddingTop = `${background_scroll*2}px`
    // console.log(background.style.paddingTop)
}, 1000)
