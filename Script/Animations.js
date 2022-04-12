Hero = document.getElementsByClassName("HeroText")
NavigationContainer = document.getElementById("NavigationContainer")
AboutMe = document.getElementById("AboutMe")
PassionateText = document.getElementById("PassionateText")
WorkExperienceSection = document.getElementById("WorkExperienceSection")
ProjectSection = document.getElementById("ProjectSection")
ContactSection = document.getElementById("ContactSection")

gsap.from(Hero, {
    opacity: 0,
    duration: .9,
    y:-50,
    stagger: 1,
    delay: .050,
    ease: Power2.easeOut
})
gsap.from(PassionateText, {
    opacity: 0,
    duration: 1.3,
    delay: .5,
    y:-50,
})

gsap.from(NavigationContainer, {
    opacity: 0,
    duration: 1.3,
    delay: 4,
    y:0,
})

gsap.from(AboutMe, {
    opacity: 0,
    duration: .9,
    y:-100,
    stagger: 1,
    delay: 3,
    ease: Power2.easeOut
})
gsap.from(WorkExperienceSection, {
    opacity: 0,
    duration: .9,
    y:-50,
    stagger: 1,
    delay: 3,
    ease: Power2.easeOut
})
gsap.from(ProjectSection, {
    opacity: 0,
    duration: .9,
    y:-100,
    stagger: 1,
    delay: 3,
    ease: Power2.easeOut
})
gsap.from(ContactSection, {
    opacity: 0,
    duration: .9,
    y:-100,
    stagger: 1,
    delay: 3,
    ease: Power2.easeOut
})
ScrollReveal().reveal('.AboutMe', { delay: 500});
ScrollReveal().reveal('.WorkExperienceSection', { delay: 500});
ScrollReveal().reveal('.ProjectSection', { delay: 500});