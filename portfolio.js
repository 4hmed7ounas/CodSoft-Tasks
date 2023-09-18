let projectButtonW = document.getElementById("web");
let webH = document.getElementById("web-h");
let projectButtonP = document.getElementById("programming");
let progH = document.getElementById("prog-h");
let projectButtonC = document.getElementById("circuit");
let cirH = document.getElementById("cir-h");
let projectButtonX = document.getElementById("x");
projectButtonW.addEventListener("click", () => {
    web1.style.display = 'flex';
    web1.style.display = 'flex';
    web2.style.display = 'flex';
    progH.style.display = 'none';
    prog.style.display = 'none';
    cirH.style.display = 'none';
    cir.style.display = 'none';
    x.style.display = 'flex';
    projectButtonW.style.display = 'none';
    projectButtonP.style.display = 'none';
    projectButtonC.style.display = 'none';
});

projectButtonP.addEventListener("click", () => {
    webH.style.display = 'none';
    web1.style.display = 'none';
    web2.style.display = 'none';
    progH.style.display = 'flex';
    prog.style.display = 'flex';
    cirH.style.display = 'none';
    cir.style.display = 'none';
    x.style.display = 'flex';
    projectButtonW.style.display = 'none';
    projectButtonP.style.display = 'none';
    projectButtonC.style.display = 'none';
});

projectButtonC.addEventListener("click", () => {
    webH.style.display = 'none';
    web1.style.display = 'none';
    web2.style.display = 'none';
    progH.style.display = 'none';
    prog.style.display = 'none';
    cirH.style.display = 'flex';
    cir.style.display = 'flex';
    x.style.display = 'flex';
    projectButtonW.style.display = 'none';
    projectButtonP.style.display = 'none';
    projectButtonC.style.display = 'none';
});

projectButtonX.addEventListener("click", () => {
    webH.style.transform = '0.5s ease-in-out';
    webH.style.display = 'none';
    web1.style.display = 'none';
    web2.style.display = 'none';
    progH.style.display = 'none';
    prog.style.display = 'none';
    cirH.style.display = 'none';
    cir.style.display = 'none';
    x.style.display = 'none';
    projectButtonW.style.display = 'flex';
    projectButtonP.style.display = 'flex';
    projectButtonC.style.display = 'flex';
});

let myButton = document.getElementById("BackToTop");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 25) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
};
const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
myButton.addEventListener("click", backToTop);

document.getElementById("navbarToggler").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("navbarMenu").classList.toggle("active");
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);