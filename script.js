// Mobile navigation: open or close the menu when the button is clicked.
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('#navlinks');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.textContent = isOpen ? 'MENU −' : 'MENU +';
    });

    // Close the mobile menu after choosing a section.
    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = 'MENU +';
        });
    });
}

// Keep the footer year current automatically.
const yearElement = document.querySelector('#year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
