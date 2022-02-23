/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

//The recursive approach
function fatorial(num){
      if(num == 0 || num == 1){
          return 1
      }else{
          return num * fatorial(num - 1) // --> multiplica pelo fatorial do numero anterior (Bem 'Dark' isso)
      }
  }
  console.log(fatorial(4))
  console.log(fatorial(5))
  console.log(fatorial(6))