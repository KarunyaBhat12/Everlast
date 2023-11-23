var tl=gsap.timeline()

tl.from("nav .logo",{
    // y:-100,
    duration:1,
    delay:0.3,
    opacity:0,
    scale:0
})


tl.from("nav ul li a",{
    y:-100,
    duration:0.4,
    delay:0.3,
    opacity:0,
    stagger:0.4
})

tl.from(".hero-section  .right>img",{
    scale:0,
    opacity:0,
    duration:3,
    delay:0.1,
    scrollTrigger:{
        trigger:".right>img",
        scroller:"body",
        scrub:1
    }
})


tl.from(".features-section  .right>img",{
    scale:0,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".right>img",
        scroller:"body",
        scrub:1
    }
})

tl.from(".remainder-section img",{
    x:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".remainder-section img",
        scroller:"body",
        scrub:1
    }
})

tl.from(".user-section img",{
    x:-100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".user-section img",
        scroller:"body",
        scrub:1
    }
})

tl.from(".last-section a",{
    // x:-100,
    opacity:0,
    duration:1,
    scale:0,
    scrollTrigger:{
        trigger:".last-section a",
        scroller:"body",
        scrub:1
    }
})

