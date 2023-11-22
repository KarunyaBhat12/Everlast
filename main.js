var tl=gsap.timeline()

tl.from(".hero-section .left h1",{
    y:-100,
    duration:0.5,
    delay:0.4,
    opacity:0,
    stagger:0.5
})


tl.from("nav ul li a",{
    y:-100,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.5
})

