// Este programa solicita ao usuário que insira seu peso (em quilogramas) e altura (em metros).
// Em seguida, ele calcula o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).
// Com base no valor do IMC, o programa determina e exibe a categoria de peso do usuário, utilizando uma estrutura de controle if-else para classificar o IMC nas seguintes categorias:
// Baixo peso: IMC menor que 18.5
// Peso normal: IMC entre 18.5 e 24.9
// Sobrepeso: IMC entre 25 e 29.9
// Obesidade: IMC igual ou maior que 30
// Obs.: Substitua a vírgula por um ponto. Ex.: 1.70 no lugar de 1,70

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o seu peso em kg: ', (pesoInput) => {
  const peso = parseFloat(pesoInput);

  rl.question('Digite a sua altura em metros: ', (alturaInput) => {
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      console.log('Por favor, insira valores numéricos válidos para peso e altura.');
      rl.close();
      return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
      categoria = 'Baixo peso';
    } else if (imc < 24.9) {
      categoria = 'Peso normal';
    } else if (imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obesidade';
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} (${categoria})`);
    rl.close();
  });
});