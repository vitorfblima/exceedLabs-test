//4) No site inicial do submarino (http://www.submarino.com.br/) há uma seção (widget) indicando o produto mais vendido. 
//Faça uma busca (crawler) que pegue o produto mais vendido e o seu valor. Exibindo o resultado no console. 
//(Mostrar como executar o código e explicitar todas as dependências)

//request é utilizado para realizar requisições HTTPS
var request = require('request');
//cheerio é responsável por parsear elementos HTML na página
var cheerio = require('cheerio');

//fazendo o request do submarino
request('http://submarino.com.br', function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }

  //realizando o parse do elemento body da página
  var $ = cheerio.load(body);

  //procurando por elementos div de class 'pure-u-1-3', que possuam child div de class 'productInfo'
  //para cada item, será executada a função abaixo
  $('div.pure-u-1-3:has(div.productInfo)').each(function( index ) {
    //pesquisando o elemento específico e trazendo seu texto
    var product = $(this).find('div.top-area-product > a').text().trim();
    var price = $(this).find('span.sale.price').text().trim();
    
    //imprimindo no console
    console.log('Produto: ' + product);
    console.log('Preço: ' + price);    
  });
});

//Obs.: o código precisa ser melhorado e a estruturação do HTML no submarino não facilitou minha vida. 
//Quando executo o código no node, está sendo retornado mais itens que o necessário, pois várias divs possuem
//a mesma classe escolhida. 

