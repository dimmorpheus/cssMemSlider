const images = document.querySelectorAll(".image-container");
const inds = document.querySelectorAll(".slider-indicator");
const descs = document.querySelectorAll(".image-description");

const timeout = 5000;
let intInst;
let cInd = 0;

function activeItem(o, n) {
    for (let i of o)
        i.classList.remove("active");
    o[n].classList.add("active");
}

function makeActive(n) {
    activeItem(images, n);
    activeItem(inds, n);
    activeItem(descs, n);
    clearInterval(intInst);
    intInst = setInterval(nextSlide, timeout);
}

function nextSlide() {
    if (cInd == images.length - 1)
        cInd = -1;
    makeActive(++cInd);
}

function prevSlide() {
    if (cInd == 0)
        cInd = images.length;
    makeActive(--cInd);
}

inds.forEach((i, ind) => {
    i.addEventListener("click", () => {
        cInd = ind;
        makeActive(cInd);
    });
});

intInst = setInterval(nextSlide, timeout);
