async function consulta() {

    let lista

    await fetch('https://api.github.com/users/JazminPinto/repos')
        .then(resp => resp.json())
        .then(data => lista = data)

    let contenedor = document.querySelector('.api-projetos')

    let totalDeRepositorios = lista.length
    document.querySelector('#api-total').textContent = 'Total de repositorios: '+ totalDeRepositorios
    


    lista.forEach(
        
        element => {

            let card = document.createElement('div')
            let titulo = document.createElement('h3')
            titulo.textContent = element.name
            let linguagem = document.createElement('p')
            linguagem.textContent = 'Tipo de linguagem: '+ element.language
            let button = document.createElement('button')
            button.innerHTML = `<a href=${element.html_url} target='_blank' rel ='noopener'>Projeto no GitHub</a>`
           

            card.appendChild(titulo)
            card.appendChild(linguagem)
            card.appendChild(button)

            contenedor.appendChild(card)

        });
}

consulta()



