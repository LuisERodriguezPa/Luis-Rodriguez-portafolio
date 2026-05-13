const enlaces = document.querySelectorAll(".navbar a");
// 2. Añadir un evento 'click' a cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function() {
    
        // 3. Eliminar la clase 'activo' de todos los enlaces
        enlaces.forEach(link => link.classList.remove('activo'));
    
        // 4. Añadir la clase 'activo' al enlace seleccionado
        this.classList.add('activo');
    });
});
// const header = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//     if(window.scrollY > 50){
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });

// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".navbar a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100; // ajuste por navbar
//         const sectionHeight = section.offsetHeight;

//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//             current = section.getAttribute("id");
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove("activo");

//         if(link.getAttribute("href") === "#" + current){
//             link.classList.add("activo");
//         }
//     });

// });

