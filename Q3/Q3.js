/*3) Nessa questão você terá que analisar as temperaturas existentes em uma DataSet, procurando pela temperatura mais próxima de 0.
Implemente o método closestToZero para retornar o valor de temperatura mais próximo de zero. As temperaturas estão no array ts.

Condições: 
  Se ts estiver vazio, retorne 0.
  Se dois números estiverem perto de zero, considere o positivo na hora de retornar. (Ex: se ts tem -5 e 5, retorne 5).
  Temperatura é sempre um valor float entre a faixa: -273 to 5526.
  ts nunca é null.
  
Código de exemplo para validação do método:
double[] ts = 
{7,-10,13,8,4,-7.2,-12,-3.7,3.5,-9.6,6.5,-1.7,-6.2,7};

double result = Solution.closestToZero(ts);

System.out.println("Result: " + result);
*/

function closestToZero(arr) {
  //criando arrays que irão coletar os valores positivos e negativos
  //do parametro 'arr'
  var negArr = [];
  var posArr = [];
  var closest;
  //verificando se o array é vazio para retornar 0 e evitar processamento
  if (arr.length === 0) {
    return 0;
  }
  //iterando sobre os elementos de arr para separar os valores positivos e 
  //negativos
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negArr.push(arr[i]);
    } else {
      posArr.push(arr[i]);
    }
  }
  //organizando os elementos do array 
  negArr.sort();
  posArr.sort();
  //closest irá receber o menor número entre os elementos de primeiro índice
  //dos arrays. no caso de negArr, o valor está sendo convertido para seu absoluto
  //para que a função min() tenha o comportamento esperado.
  closest = Math.min(Math.abs(negArr[0]), posArr[0]);

  return closest;
} 
//validando
var arr = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7]
var result = closestToZero(arr);
