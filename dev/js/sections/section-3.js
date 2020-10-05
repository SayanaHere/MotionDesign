import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const section3TL = gsap.timeline();
section3TL.from("#section-3 title",{duration:0.5,alpha:0})
            .from("#cards",{duration:0.5,scaleX:0});

            gsap.set(".scale-left", {transformOrigin: "left"});


export function section3Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "restart none reverse none",
        scrub: 1,
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 70%"
    });
}