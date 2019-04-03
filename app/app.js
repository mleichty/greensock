var div = $('.animate');
var wrap = $('.wrapper');
var tl = new TimelineLite();
// tl.to(div, 2, {right: 0});
// tl.to(div, 2, {left: 0, bottom: 0, onComplete: nextStep});
// //tl.to(div, 2, {right: 0});
//
// function nextStep() {
//     console.log ('working');
//     tl.to(div, 2, {right: 0});
// }

tl.to(div, 2, {right: 0})
    .to(div, 2, {left: 0, bottom: 0})
    .to(div, 2, {left: '88.25%'});

//tried changing to TimelineMax
//tried onComplete function after the second .to
//tried changing animate to id
//tried adding some sort of number after {right: 0}?
//tried adding bottom: 0 to third
//tried adding tl.to on each line instead of one expression
//tried doing display:flex and positioning via justify/align
//tried doing float: left and right but same thing as above