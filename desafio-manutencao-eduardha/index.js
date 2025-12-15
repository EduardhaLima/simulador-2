function msg() {
    alert('Você clicou no botão!');
}

function clicked() {
    alert('elemento clicado');
}

function addEvents() {
    const button = document.getElementById('botao'); 

    if (button) {
        button.addEventListener('click', clicked); 
    } else {
        console.error("Elemento com ID 'botao' não encontrado!");
    }
}

document.addEventListener('DOMContentLoaded', addEvents);