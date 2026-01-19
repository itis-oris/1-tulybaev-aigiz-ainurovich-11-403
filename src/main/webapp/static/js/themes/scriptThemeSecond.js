const toggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.classList.add(savedTheme);
} else {
    htmlElement.classList.add('light');
    localStorage.setItem('theme', 'light');
}

toggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});