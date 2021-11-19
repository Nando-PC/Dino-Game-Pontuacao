function changeMode(){
    changeClass();
    changeText();
}

function changeClass(){
    botao.classList.toggle('dark');
    h1.classList.toggle('dark');
    body.classList.toggle('dark');
    footer.classList.toggle('dark');
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains('dark')){
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //array de índice zero
const footer = document.getElementsByClassName('rodape')[0];

botao.addEventListener('click', changeMode);

