Hero = document.getElementsByClassName("HeroText")
NavigationContainer = document.getElementById("NavigationContainer")
gsap.from(Hero, {
    opacity: 0,
    duration: .9,
    y:-50,
    stagger: 1,
    delay: .050,
    ease: Power2.easeOut
})
gsap.from(NavigationContainer, {
    opacity: 0,
    duration: 1.3,
    delay: 4,
    y:0,
})

ScrollReveal().reveal('.AboutMe', { delay: 300 });
ScrollReveal().reveal('.WorkExperienceSection', { delay: 300 });
ScrollReveal().reveal('.ProjectSection', { delay: 300 });