/*Só permitir envio do formulário após preenchimento dos dados
Dados precisam ser válidos (ex: email)
Exibir erros

Exibir repositórios do GitHub do usuário
Consultar API*/
function enviar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let assunto = document.getElementById('assunto').value;
    let comentario = document.getElementById('comentario').value;

    let json = {
        'nome': nome,
        'email': email,
        'assunto': assunto,
        'comentario': comentario,
    }
    console.log(json)
}
function validateEmail(e) {
    email = e.target;
    email.Value = email.value;

    if (emailValue.search('@') == 1) {
        displayError ('Email nao é valido', email);
    } else {
        clearError(email);
    }

    email.clssList.remove('not-validated');
    checkEnableSubmit();

}
console.log(validateEmail)


document.querySelector('#butao-terciario').addEventListener('click', enviar)