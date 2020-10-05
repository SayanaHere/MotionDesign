import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const section2TL = gsap.timeline();
section2TL.from("#section-2-container img",{duration:1.5,alpha:0, scale:0})
            .from("#section-2-content h1",{duration:0.5,alpha:0,x:300})
            .from("#section-2-content h3",{duration:0.5,alpha:0,x:-300});
            

            gsap.set(".scale-left", {transformOrigin: "left"});

export function section2Animation(){

    ScrollTrigger.create({
        animation: section2TL,
        toggleActions: "restart none none none",
        trigger: "#section-2",
        start:"top, 60%",
        end: "bottom 60%"
    });
}