function changeMode() {
    classes();
    texto();
}

function classes() {
    button.classList.toggle(darkmode);
    h1.classList.toggle(darkmode);
    body.classList.toggle(darkmode);
    footer.classList.toggle(darkmode);

}

function texto() {

    const lightmode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(darkmode)) {
        button.innerHTML = lightmode;
        h1.innerHTML = darkMode + " ON";

        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightmode + " ON";
}

const darkmode = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);