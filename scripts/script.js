const navBtn = document.querySelector(".navMobile__btn");
const navMenu = document.querySelector(".navMobile");

let navOpen = false; // You can keep this for other logic if needed.

navBtn.addEventListener("click", function () {
    navBtn.classList.toggle("navMobile__btn--open");
    navMenu.classList.toggle("navMobile--open");

    console.log("navMenu classes:", navMenu.classList);
    console.log("navBtn classes:", navBtn.classList);

    navOpen = !navOpen; // Simplified toggle for navOpen
});