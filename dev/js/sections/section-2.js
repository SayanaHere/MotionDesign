import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section2TL = gsap.timeline();
section2TL.from("#section-2-content img",{duration:1,alpha:0, scale:0})
            .from("#section-2-content h1",{duration:2,alpha:0,x:300, stagger:2})
            .from("#section-2-content h3",{duration:2,alpha:0, stagger:3});
            

           

export function section2Animation(){

    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-2",
        start:"top, 60%",
        end: "bottom 60%"
    });
}