// EXERCICIO NA AULA
// const megaSena = [
//   // array pai
//   [1, 2, 3, 4, 5, 6], // array filho
//   [11, 22, 33, 44, 55, 66], // array filho
//   [10, 20, 30, 40, 50, 60], // array filho
//   [9, 19, 29, 29, 49, 59], // array filho
// ]

// // exercicio 02 e 03
// if (megaSena.length === 4) {
//   for (let i in megaSena) {
//     // i => key => string
//     let sorteio = `Sorteio ${Number(i) + 1}: `
//     for (let j of megaSena[i]) {
//       sorteio += `${j} `
//     }
//     console.log(sorteio)
//   }
// } else {
//   console.log('É necessário alterar o número de itens do array')
// }

// // exercicio 01
// if (megaSena.length === 4) {
//   for (let i = 0; i < megaSena.length; i++) {
//     // percorre o ARRAY PAI
//     let sorteio = `Sorteio ${i + 1}: `
//     for (let j = 0; j < megaSena[i].length; j++) {
//       // percorre o array filho
//       sorteio += `${megaSena[i][j]} `
//     }
//     console.log(sorteio)
//   }
// } else {
//   console.log('É necessário alterar o número de itens do array')
// }

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
// MELISSA TURMA D
for (let i in filmes) {
console.log(`Filme ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
for (let j of filmes){
  console.log(`Tem no elenco: ${filmes[i].elenco}`);
  break;
}
}