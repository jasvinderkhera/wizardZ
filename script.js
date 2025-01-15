let tl = gsap.timeline()

tl.from(".logoContainer",{
    y:-40,
    opacity:0,
    duration:0.25
})
tl.from(".siteName",{
    y:-40,
    opacity:0,
    duration:0.2,
    delay:0.1
})
tl.from(".menu h5 a, .menu button",{
    y:-40,
    opacity:0,
    duration:0.25,
    delay:0.1,
    stagger:0.25
})
tl.from(".logoContainer .logo",{
    rotate:0,
    duration:0.2,
})
tl.from(".mobileMenu img",{
    y:-40,
    opacity:0,
    duration:0.2
})
tl.from(".hero-info",{
    x:-500,
    opacity:0,
    duration:0.3,
    delay:0.1
})
tl.from(".hero-detail",{
    x:-500,
    opacity:0,
    duration:0.4,
    delay:0.1
})
tl.from(".ctaBtn",{
    y:150,
    opacity:0,
    duration:0.4,
    delay:0.2
})
tl.from(".hero-vector",{
    x:500,
    opacity:0,
    duration:0.4,
    delay:0.2
})

gsap.from(".companies img",{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.3,
    scrollTrigger:{
        start: 100,
        scroll: "body",
    }
})

gsap.from(".services h3",{
    x:-300,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        scroll:"body",
        start:300,
    }
})
gsap.from(".services p",{
    x:300,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        scroll:"body",
        start:300
    }
})
gsap.from(".mainServices .box1",{
    x:-500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        scroll:"body",
         scrub:2,
          start: "top 200%"
    }
})
gsap.from(".mainServices .box2",{
    x:500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        scroll:"body",
         scrub:2,
         start: "top 200%"
    }
})
gsap.from(".mainServices .box3",{
    x:-500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        scroll:"body",
        scrub:2,
         start: "top 180%"
    }
})
gsap.from(".mainServices .box4",{
    x:500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        scroll:"body",
        scrub:2,
         start: "top 180%"
    }
})


let x = false
function menu(){
    if (x == false){
        let mobileMenu = document.querySelector(".mobileMenuItems").style.display="block"
        x = true
    }else{
        let mobileMenu = document.querySelector(".mobileMenuItems").style.display="none"
        x = false
    }
}