async function consulta() {

    let lista

    //await é para aguardar
    await fetch('https://api.github.com/users/JazminPinto/repos')
        .then(resp => resp.json())
        .then(data => lista = data)

    let contenedor = document.querySelector('.api-projetos')

    let totalDeRepositorios = lista.length
    document.querySelector('#api-total').textContent = 'Total de repositorios: '+ totalDeRepositorios
    

    lista.forEach(
        
        element => {

            let card = document.createElement('div')
            card.classList.add('api-card')
            
            let titulo = document.createElement('h3')
            titulo.textContent = element.name
            
            let linguagem = document.createElement('p')
            linguagem.textContent = 'Tipo de linguagem: '+ element.language
            
            let data = new Date(element.created_at)
            let dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
            let dataDeCriacao = document.createElement('p')
            dataDeCriacao.textContent = 'Data de criação:' + dataFormatada
            
            let dataAtualizada = new Date(element.updated_at)
            let ultimaData = `${dataAtualizada.getDate()}/${dataAtualizada.getMonth()}/${dataAtualizada.getFullYear()}`
            let ultimaDataAtualiza = document.createElement('p')
            ultimaDataAtualiza.textContent = 'Ultima de Atualização:' + ultimaData

            let button = document.createElement('button')
            button.innerHTML = `<a href=${element.html_url} target='_blank' rel ='noopener'>Projeto no GitHub</a>`
            button.classList.add('botao-secundario')

            card.appendChild(titulo)
            card.appendChild(linguagem)
            card.appendChild(dataDeCriacao)
            card.appendChild(ultimaDataAtualiza)
            card.appendChild(button)

            contenedor.appendChild(card)

        });
}

consulta()



