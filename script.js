function homepageAnimation() {
    gsap.set(".slidesm", { scale: 20 });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
        }
    });

    tl
        .to(".vdodiv", { '--clip': "0%", ease: "power2" }, 'a')
        .to(".slidesm", { scale: 1, ease: "power2" }, 'a')
        .to(".lft", { xPercent: -10, stagger: 0.03, ease: "power4" }, 'b')
        .to(".rgt", { xPercent: 10, stagger: 0.03, ease: "power4" }, 'b');
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
            // markers: true,
        },
        xPercent: -300,
        ease: "power4"
    });
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), {
                opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: "power4",
                duration: 0.5
            });
        });

        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: "power4",
                duration: 0.5
            });
        });
    });
}

function paraAnimation() {
    var textElement = document.querySelector(".textpara h3");
    if (textElement) {
        var clutter = "";
        textElement.textContent.split("").forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`;
            else clutter += `<span>${e}</span>`;
        });
        textElement.innerHTML = clutter;

        gsap.set(".textpara h3 span", { opacity: 0.1 });
        gsap.to(".textpara h3 span", {
            scrollTrigger: {
                trigger: ".textpara",
                start: "top 60%",
                end: "bottom 90%",
                scrub: 1
            },
            opacity: 1,
            stagger: 0.03,
            ease: "power4"
        });
    }


}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation() {
    gsap.fromTo(".capsule:first-child",
        { y: 120 },
        {
            y: -120,
            scrollTrigger: {
                trigger: ".capsules",
                start: "top 80%",
                end: "bottom 30%",
                scrub: true,
                // markers: true // d
            },
            ease: "power2.out"
        }
    );

    gsap.fromTo(".capsule:nth-child(2)",
        { y: -120 },
        {
            y: 120,
            scrollTrigger: {
                trigger: ".capsules",
                start: "top 80%",
                end: "bottom 30%",
                scrub: true,
                // markers: true
            },
            ease: "power2.out"
        }
    );
}

function bodyColorChange(){
document.querySelectorAll(".section")
    .forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 20%",
            end: "bottom 20%",
            //markers:true,
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}


homepageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
loco();
capsulesAnimation();
bodyColorChange();