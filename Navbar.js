const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    // Add a console log to check if the event listener is triggered
    console.log('Menu icon clicked');
    
    // Toggle the 'active' class on the menu
    menu.classList.toggle('active');
});
