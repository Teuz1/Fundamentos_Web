// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Espera até que o DOM esteja completamente carregado

    // Adiciona um ouvinte de evento para o formulário
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('mensagem').value;

        // Exibe um alerta com os valores do formulário (substitua isso com a lógica desejada)
        alert('Mensagem enviada!\n\nNome: ' + nome + '\nE-mail: ' + email + '\nMensagem: ' + mensagem);
        
        // Limpa os campos do formulário (opcional)
        formulario.reset();
    });
});
