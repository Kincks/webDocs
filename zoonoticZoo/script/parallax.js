const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.2 + "px";
})

//from freeCodeCamp.org https://www.youtube.com/watch?v=llv5kW4sz0U