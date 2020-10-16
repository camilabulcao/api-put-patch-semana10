const games = require('../model/games.json')

const atualizar = (request, response) =>{
    const gamesAtualizado = request.body
    const id = parseInt(request.params.id)

    const gamesIds = games.map(games => games.id)

    const atualizaId = gamesIds.indexOf(id)

    const gamesAtualizadocomId = {id, ...gamesAtualizado}

    games.splice(atualizaId,1, gamesAtualizadocomId)

    response.status(200).send(games.find(games => games.id === id))

    console.log(gamesAtualizadocomId)
}

const update = (request, response)=>{
    const gamesAtualizacao = request.body
    const id = parseInt(request.params.id)
    console.log("Aqui está o id", id)
    const gamesParaAtualizar = (games.find(games => games.id == id))
    console.log("Aqui é o game para atualizar", gamesParaAtualizar)

    Object.keys(gamesAtualizacao).forEach((chave) =>{
        gamesParaAtualizar[chave] = gamesAtualizacao[chave]

    })

    console.log("Esse é do game atuliazacao", gamesAtualizacao)
    
    response.status(200).send(gamesParaAtualizar)

}

module.exports ={
    atualizar,
    update
}