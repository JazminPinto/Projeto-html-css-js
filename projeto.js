/*Só permitir envio do formulário após preenchimento dos dados
Dados precisam ser válidos (ex: email)
Exibir erros

Exibir repositórios do GitHub do usuário
Consultar API*/

function validarNome() {
    let inputNome = document.getElementById('nome')
    let spanNome = document.getElementById('span-nome')
    let nome = document.getElementById('nome').value;
    let tamanhoDoNome = nome.length

    if (tamanhoDoNome <= 2) {
        inputNome.classList.add('erro')
        spanNome.innerHTML = 'nome incorreto'
        return false

    } else {
        inputNome.classList.remove('erro')
        spanNome.innerHTML = ''
    }
    return true
}

function validarEmail() {
    let inputEmail = document.getElementById('email')
    let spanEmail = document.getElementById('span-email')
    let email = document.getElementById('email').value;

    if (email.search('@') == -1) {

        inputEmail.classList.add('erro')
        spanEmail.innerHTML = 'formato incorreto'
        return false

    } else {
        inputEmail.classList.remove('erro')
        spanEmail.innerHTML = ''
    }
    return true
}

function validarAssunto() {
    let inputAssunto = document.getElementById('assunto')
    let spanAssunto = document.getElementById('span-assunto')
    let assunto = document.getElementById('assunto').value
    let tamanhoDoAssunto = assunto.length


    if (tamanhoDoAssunto <= 1) {
        inputAssunto.classList.add('erro')
        spanAssunto.innerHTML = 'assunto incompleto'
        return false
    } else {
        inputAssunto.classList.remove('erro')
        spanAssunto.innerHTML = ''
    }
    return true
}

function validarComentario() {
    let inputComentario = document.getElementById('comentario')
    let spanComentario = document.getElementById('span-comentario')
    let comentario = document.getElementById('comentario').value
    let tamanhoDoComentario = comentario.length


    if (tamanhoDoComentario <= 10) {
        inputComentario.classList.add('erro')
        spanComentario.innerHTML = 'o comentario deve ter minimo 10 letras'
        return false

    } else {
        inputComentario.classList.remove('erro')
        spanComentario.innerHTML = ''
    }
    return true
}

function enviar() {
    validarNome()
    validarEmail()
    validarAssunto()
    validarComentario()

    if (validarNome() == true && validarEmail() == true && validarAssunto() == true && validarComentario() == true) {
        sucesso.classList.add('sucesso')
        sucesso.innerHTML = 'Formulario completo, Dados enviados com sucesso'
        return true

    } else { console.log('formulario incompleto')
    sucesso.classList.add('erro')
    sucesso.innerHTML = 'Formulario incompleto, por favor verifique seus dados' }
    return false
}

document.querySelector('#nome').addEventListener('input', validarNome)
document.querySelector('#email').addEventListener('input', validarEmail)
document.querySelector('#assunto').addEventListener('input', validarAssunto)
document.querySelector('#comentario').addEventListener('input', validarComentario)
document.querySelector('#botao-terciario').addEventListener('click', enviar)
/*document.querySelector('#nome').addEventListener.('input', limpaForm)*/