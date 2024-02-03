let scrollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");


scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 900;
});

