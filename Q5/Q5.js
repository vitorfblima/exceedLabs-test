//5) Faça um app que receba um usuário e uma senha, realize uma autenticação no Instagram (usando a API do Instagram) e exiba no console: 
//O nome do usuário autenticado
//Quantos seguidores tem 
//Quantos pessoas está seguindo

//Necessário usar OAuth para acessar a API do Instagram. Gerei um access token
//mas ainda estou venrificando como utilizar a autenticação da forma como foi
//pedido na questão. Pelo que entendi, o token é necessário para redirecionar o 
//user após conceder acesso ao app. 
//Obs.: Onde eu estava não podia acessar a documentação do Instagram (restrições da 
//rede) e não tive muito tempo hábil para realizar a questão.

//Abaixo seria o esqueleto de 'autenticação' simples (e falha) usando request 
var request = require('request')
var username = 'vitor'
var password = 'secret'
var options = {
  url: 'https://www.instagram.com',
  auth: {
    user: username,
    password: password,

  }
}

request(options, function (err, res, body) {
  if (err) {
    console.dir(err)
    return
  }  
  //mais ações
})