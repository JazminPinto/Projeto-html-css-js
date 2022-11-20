/*Só permitir envio do formulário após preenchimento dos dados
Dados precisam ser válidos (ex: email)
Exibir erros

Exibir repositórios do GitHub do usuário
Consultar API*/

function validarNome() {
    let nome = document.getElementById('nome').value;
    let tamanhoDoNome = nome.length

    console.log(tamanhoDoNome)

    if (tamanhoDoNome <= 1) {
        console.log('nao pode estar vazio')
        return false

    } else {

        console.log('nome valido')
    }
    return true
}

function validarEmail() {
    let inputEmail = document.getElementById('email')
    let spanEmail = document.getElementById('span-email')
    let email = document.getElementById('email').value;
    console.log(email)

    if (email.search('@') == -1) {

        inputEmail.classList.add('erro')
        spanEmail.innerHTML = 'formato incorreto'
        console.log('formato incorreto')
        return false

    } else {
        console.log('formato valido')
        inputEmail.classList.remove('erro')
        spanEmail.innerHTML = ''
    }
    return true
}






function enviar() {
    // let assunto = document.getElementById('assunto').value;
    //let comentario = document.getElementById('comentario').value;
    validarNome()
    validarEmail()


    if (validarNome() == true && validarEmail() == true) {
        console.log('formulario correcto')
    } else { console.log('formulario incorrecto') }
}

document.querySelector('#nome').addEventListener('input', validarNome)
document.querySelector('#email').addEventListener('input', validarEmail)
document.querySelector('#botao-terciario').addEventListener('click', enviar)