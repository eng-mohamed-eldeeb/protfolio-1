const menuIcon = document.querySelector("#menuIcon");
const menuContaner = document.querySelector(".menu_contaner");
const wrapper = document.querySelector(".wrapper");
const iconX = document.querySelector("#iconX");
const options = document.querySelectorAll(".options");

[menuIcon ,iconX].forEach(e => {
    e.addEventListener("click", () => {
        menuContaner.classList.toggle('d-none');
        menuContaner.classList.toggle('p-fixed');
        menuContaner.classList.toggle("d-flex");
        wrapper.classList.toggle("p-fixed");
        wrapper.classList.toggle("d-none");
        wrapper.classList.toggle("d-flex");
      });      
});

options.forEach((e) => {
    e.addEventListener("click", () => {
        menuContaner.classList.toggle('d-none');
        menuContaner.classList.toggle('p-fixed');
        menuContaner.classList.toggle("d-flex");
        wrapper.classList.toggle("p-fixed");
        wrapper.classList.toggle("d-none");
        wrapper.classList.toggle("d-flex");
    })
})