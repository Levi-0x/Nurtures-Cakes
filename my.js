/*-----------------------------------------------
    SIDEBAR — open / close
-----------------------------------------------*/
const menuBtn        = document.getElementById('menuBtn');
const navbar         = document.getElementById('navbar');
const sidebarClose   = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    navbar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';   // stop background scroll
}

function closeSidebar() {
    navbar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// close sidebar when a link inside it is clicked
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
});


/*-----------------------------------------------
    SCROLL REVEAL
-----------------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// /*-----------------------------------------------
//     ABOUT IMAGE — auto rotate every 3 seconds
// -----------------------------------------------*/
// const aboutImg = document.querySelector('.about-img');

// const images = [
//   './cakes/woman-pouring-dough-medium-shot.jpg',
//   './cakes/about.jpg',       // replace with your 2nd image
//   './cakes/front-view-woman-baking-kitchen.jpg',       // replace with your 3rd image
// ];

// let currentImg = 0;

// setInterval(() => {
//   currentImg = (currentImg + 1) % images.length;
//   aboutImg.style.backgroundImage = `url(${images[currentImg]})`;
// }, 3000);

// /*-----------------------------------------------
//     ADD TO CART — button feedback
// -----------------------------------------------*/
// document.querySelectorAll('.add_btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.innerHTML = '<i class="fa-solid fa-check"></i>';
//         btn.style.background = '#2d7a2d';

//         setTimeout(() => {
//             btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
//             btn.style.background = '';
//         }, 1300);
//     });
// });
