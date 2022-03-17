const body = document.body,
Content = document.getElementsByClassName('Container')[0],
height = Content.getBoundingClientRect().height -1,
speed = 0.5

let offset = 0
function SmoothScroll(){
    offset += (window.pageYOffset - offset) * speed
    let scoll = "translateY(-"+offset+"px) translatez(0"
    Content.style.transform = scroll

    raf = requestAnimationFrame(SmoothScroll)
}
SmoothScroll();