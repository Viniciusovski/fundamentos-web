//Manipulação de String
var s = 'Javascript'

s.length //quantos carcteres a strign tem
s.toUpperCase() //tudo para 'MAIÚSCULAS'
s.toLowerCase() //tudo para 'minúsculas'

'Eu estou aprendendo s' //não faz interpolação
'Eu estou aprendendo' + s //usa concatenação
`Eu estou aprendendo ${s}` //usa template string com crase

//Manipulação de Number
var n1 = 1543.5
n1
n1.toFixed(2) //Coloca casas decimais
n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}) //Formato do numero em dinheiro