// import {gsap} from "gsap";

// gsap.to(".heart",{duration:2, rotation:360})

var tl = new TimelineMax({repeat:98});

var speed = 0.2; //seconds

tl
.to("#heart", 0.5, {scaleX:1.2, scaleY:1.3, ease:Elastic.easeOut, repeat:-1, repeatDelay:speed});
