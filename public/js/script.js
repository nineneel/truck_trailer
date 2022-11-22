feather.replace();

const navBtn = document.querySelector("#nav-btn");
const navCont = document.querySelector("#nav-cont");

navBtn.addEventListener("click", () => {
    if (navCont.classList.contains("hidden")) {
        navCont.classList.remove("hidden");
        navCont.classList.add("min-h-fit");
    } else {
        navCont.classList.add("hidden");
        navCont.classList.remove("min-h-fit");
    }
});

const trukList = document.querySelectorAll(".truk-list");
const trukListBtn = document.querySelectorAll(".truk-list-btn");
trukListBtn.forEach((btn, it) => {
    btn.addEventListener("click", (target) => {
        console.log(trukList[it].classList);
        trukList[it].classList.toggle("hidden");
        trukList[it].classList.toggle("flex");
        setTimeout(() => {
            trukList[it].classList.toggle("translate-y-0");
            trukList[it].classList.toggle("visible");
            trukList[it].classList.toggle("opacity-100");
            trukList[it].classList.toggle("-translate-y-full");
            trukList[it].classList.toggle("invisible");
            trukList[it].classList.toggle("opacity-0");
        }, 100);
    });
});

// F.A.Q
const faqCon = document.querySelectorAll("#faq-con");
const faqBtn = document.querySelectorAll("#faq-btn");
const faqAns = document.querySelectorAll("#faq-ans");
const faqIcon = document.querySelectorAll("#faq-icon");

let old = 0;
faqBtn.forEach((el, it) => {
    faqBtn[it].addEventListener("click", () => {
        closeFaq(old);
        openFaq(it);
        old = it;
    });
});

function openFaq(it) {
    faqAns[it].classList.remove("hidden");
    faqCon[it].classList.remove("bg-box");
    faqCon[it].classList.add("bg-white");
    faqAns[it].classList.add("block");
    faqIcon[it].classList.add("hidden");
}

function closeFaq(it) {
    faqCon[it].classList.remove("bg-white");
    faqAns[it].classList.remove("block");
    faqIcon[it].classList.remove("hidden");
    faqAns[it].classList.add("hidden");
    faqCon[it].classList.add("bg-box");
}

// Client
const clientMain = document.querySelectorAll("#client-main");
const clientProf = document.querySelectorAll("#client-prof");

let clientOld = 0;
clientProf.forEach((el, it) => {
    el.addEventListener("click", () => {
        removeClient(clientOld);
        showClient(it);
        clientOld = it;
    });
});

function showClient(it) {
    // remove hidden invisible opacity-0
    clientMain[it].classList.remove("hidden");
    clientMain[it].classList.remove("invisible");
    setTimeout(() => {
        clientMain[it].classList.remove("opacity-0");
    }, 300);
    // remove opacity-50 scale-90
    clientProf[it].classList.remove("opacity-50");
    clientProf[it].classList.remove("scale-90");
}

function removeClient(it) {
    // add hidden invisible opacity-0
    clientMain[it].classList.add("hidden");
    clientMain[it].classList.add("invisible");
    clientMain[it].classList.add("opacity-0");
    // add opacity-50 scale-90
    clientProf[it].classList.add("opacity-50");
    clientProf[it].classList.add("scale-90");
}

// __add animation
setInterval(() => {
    removeClient(clientOld);
    let nextClient = clientOld + 1 == 4 ? 0 : clientOld + 1;
    showClient(nextClient);
    clientOld = clientOld + 1 == 4 ? 0 : clientOld + 1;
}, 5000);
