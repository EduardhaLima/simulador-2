function msg() {
    alert('Você clicou no botão!');
}

function clicked() {
    alert('elemento clicado');
}

function addEvents() {
    const button = document.getElementById('meuBotao'); 

    if (button) {
        button.addEventListener('click', clicked); 
    } else {
        console.error("Elemento com ID 'meuBotao' não encontrado!");
    }
}

document.addEventListener('DOMContentLoaded', addEvents);