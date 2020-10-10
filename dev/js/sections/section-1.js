import {gsap} from "gsap";

 export function section1Animation(){
     gsap.from("#title-container h1, p, img",{duration:1.5, alpha:0, y:400});
 }

