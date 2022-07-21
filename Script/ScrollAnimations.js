navWorkLink = document.getElementById("work")
navAboutLink = document.getElementById("about")
navContactLink = document.getElementById("contact")
navOtherLink = document.getElementById("other")


projectSection = document.getElementById("projectSection")
aboutMeSection = document.getElementById("aboutMeSection")
sayHelloSection = document.getElementById("sayHelloSection")
JoinNewsLetterSection = document.getElementById("JoinNewsLetterSection")

navWorkLink.addEventListener("click", ()=>{ projectSection.scrollIntoView() })
navAboutLink.addEventListener("click", ()=>{ aboutMeSection.scrollIntoView() })
navContactLink.addEventListener("click", ()=>{ sayHelloSection.scrollIntoView() })
navOtherLink.addEventListener("click", ()=>{ JoinNewsLetterSection.scrollIntoView() })