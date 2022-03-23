Hero = document.getElementById("Hero")
NavigationContainer = document.getElementById("NavigationContainer")
gsap.from(Hero, {
    opacity: 0,
    duration: 1.5,
    y:-50
})
gsap.from(NavigationContainer, {
    opacity: 0,
    duration: 1.3,
    delay: 0.5,
    y:0
})