function validarNome() {
    let inputNome = document.getElementById('nome')
    let spanNome = document.getElementById('span-nome')
    let nome = document.getElementById('nome').value;
    let tamanhoDoNome = nome.length

    if (tamanhoDoNome <= 2) {
        //classList.add vai adicionar a mensagem do innerHTML quando seja incorreto
        inputNome.classList.add('erro')
        spanNome.innerHTML = 'nome incorreto'
        return false

    } else {
        //classList.remove vai remover a mensagem do innerHTML quando seja correto
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
//function vai ativar as funçoes ao clickar no butao enviar
function enviar() {
    validarNome()
    validarEmail()
    validarAssunto()
    validarComentario()

    let form = document.querySelector('.mensagem')
        //este procedimento e para saber se o cliente fez tudo corretamente vai aparecer na tela uma mensagem se sucesso
    if (validarNome() == true && validarEmail() == true && validarAssunto() == true && validarComentario() == true) {
        sucesso.classList.add('sucesso')
        form.reset()
        sucesso.innerHTML = 'Formulario completo, Dados enviados com sucesso'
        return true

        //e este procedimento e para saber se o cliente fez alguma coisa errada, vai aparecer na tela uma mensagem de erro
    } else {
        sucesso.classList.add('erro')
        sucesso.innerHTML = 'Formulario incompleto, por favor verifique seus dados'
    }
    return false
}

//para ativar as funçoes
document.querySelector('#nome').addEventListener('input', validarNome)
document.querySelector('#email').addEventListener('input', validarEmail)
document.querySelector('#assunto').addEventListener('input', validarAssunto)
document.querySelector('#comentario').addEventListener('input', validarComentario)
document.querySelector('#botao-terciario').addEventListener('click', enviar)