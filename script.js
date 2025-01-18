// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'), // Use a container with 'data-scroll-container'
    smooth: true
});

// Link GSAP ScrollTrigger with Locomotive Scroll
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
        ? "transform"
        : "fixed"
});

// Refresh ScrollTrigger after Locomotive updates
scroll.on("scroll", ScrollTrigger.update);

// GSAP Timeline Animations
let tl = gsap.timeline();

tl.from(".logoContainer", {
    y: -40,
    opacity: 0,
    duration: 0.25
});
tl.from(".siteName", {
    y: -40,
    opacity: 0,
    duration: 0.2,
    delay: 0.1
});
tl.from(".menu h5, .menu button",{
    y:50,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.25
})
tl.from(".hero-info",{
    x:-100,
    opacity:0,
    duration:0.5,
    delay:0.3,
})
tl.from(".hero-detail",{
    x:-100,
    opacity:0,
    duration:0.5,
    delay:0.3,
})
tl.from(".hero-vector",{
    x:100,
    opacity:0,
    duration:0.5,
    delay:0.3,
})
tl.from(".logoContainer img",{
    rotate:0,
    duration:0.3
})
tl.from(".mobileMenu img",{
    y:-40,
    opacity:0,
    duration:0.2
})
tl.from(".ctaBtn",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.3,
})
// Ensure you don't mix `scrollTrigger` with timeline animations.

// GSAP Animations with ScrollTrigger
gsap.from(".companies img", {
    y: 100,
    opacity: 0,
    duration: 0.3,
    delay:0.3,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".companies img",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});

gsap.from(".services h3", {
    x: -300,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".services h3",
        scroller: "[data-scroll-container]",
        start: "top 90%",
        end: "top 60%",
        scrub: true
    }
});
gsap.from(".services p", {
    x: 300,
    opacity: 0,
    duration: 0.4,
    scrollTrigger: {
        trigger: ".services h3",
        scroller: "[data-scroll-container]",
        start: "top 90%",
        end: "top 60%",
        scrub: true
    }
});
gsap.from(".mainServices .box1",{
    x:-500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        trigger: ".mainServices .box1",
        scroller:"[data-scroll-container]",
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
        trigger: ".mainServices .box2",
        scroller:"[data-scroll-container]",
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
        trigger: ".mainServices",
        scroller:"[data-scroll-container]",
        scrub:2,
         start: "top 200%"
    }
})
gsap.from(".mainServices .box4",{
    x:500,
    opacity:0,
    stagger:0.25,
    duration:0.3,
    delay:0.5,
    scrollTrigger:{
        trigger: ".mainServices",
        scroller:"[data-scroll-container]",
        scrub:2,
         start: "top 200%",
    }
})

// Refresh everything
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();



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