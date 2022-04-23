window.addEventListener('load', function() {
Hero = document.getElementsByClassName("HeroText")
NavigationContainer = document.getElementById("NavigationContainer")
AboutMe = document.getElementById("AboutMe")
PassionateText = document.getElementById("PassionateText")
WorkExperienceSection = document.getElementById("WorkExperienceSection")
ProjectSection = document.getElementById("ProjectSection")
ContactSection = document.getElementById("ContactSection")
ViewProject = document.getElementById("ViewProject")

gsap.from(Hero, {
    opacity: 0,
    duration: .15,
    y:-50,
    stagger: 1,
    delay: 1.5,
    ease: Power2.easeIn
})
gsap.from(PassionateText, {
    opacity: 0,
    duration: .7,
    delay: 1.7,
    y:0,
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
let ScrollAnimationArray = [
    document.querySelector('.AboutMe'),
    document.querySelector('.WorkExperienceSection'),
    document.querySelector('#Projects'),
    document.querySelector('.ContactSection')
]

let ScrollAnimationArrayProjects = document.querySelectorAll('#Projects')

let ScrollAnimation = {
    opacity: 0,
    distance: "20%",
    origin: "bottom",
    delay: 200
}



ScrollReveal().reveal(ScrollAnimationArray, ScrollAnimation);
ScrollReveal().reveal(ScrollAnimationArrayProjects, ScrollAnimation);

//Scroll into view
ViewProject.addEventListener("click", function(){
    Offset = 50
    XAxis = ProjectSection.getBoundingClientRect()["x"]
    YAxis = ProjectSection.getBoundingClientRect()["y"]
    scrollTo(XAxis,YAxis - Offset)
    console.log("Done")
})
})