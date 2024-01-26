let resLen = document.getElementsByClassName("residential__item").length;
let comLen = document.getElementsByClassName("commersial__item").length;

let resServ = 0;

document.getElementById("rbl").style.opacity = '0.2';
document.getElementById("rbl").style.cursor = 'not-allowed';

if (resServ > resLen) {
    document.getElementById("rbr").style.display = 'none';
    console.log("NONE");
} else {
    document.getElementById("rbr").style.display = 'flex';
}
    

document.getElementById("rbl").onclick = function () {
    if (resServ > 0) {
        console.log(resServ);
        resServ--;

    } else {
        document.getElementById("rbl").style.opacity = '0.2';
        document.getElementById("rbl").style.cursor = 'not-allowed';
        console.log(resServ);
    }

}
    
document.getElementById("rbr").onclick = function () {
    resServ++;
    console.log(resServ);
    if (resServ > 0) {
    document.getElementById("rbl").style.opacity = '1';
    document.getElementById("rbl").style.cursor = 'pointer';
} 
} 

console.log(resLen);


// let residential = document.getElementsByClassName("residential__item");
// for (let i = 0; i < residential.length; i++) {
//     residential[1].style.display = 'none';
// }