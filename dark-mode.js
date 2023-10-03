const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeStyle = document.getElementById('dark-mode-style');

// Function to toggle dark mode
function toggleDarkMode() {
    if (darkModeStyle.getAttribute('href') === 'style.css') {
        darkModeStyle.setAttribute('href', 'dark-mode.css');
    } else {
        darkModeStyle.setAttribute('href', 'style.css');
    }
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', toggleDarkMode);