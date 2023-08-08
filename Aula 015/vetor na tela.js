var num = [2, 3, 5, 4, 7, 8, 9, 6, 4, 5, 6, 3, 2, 1, 4, 5, 8, 7]
var pos = 1
num.sort()
/*
for(pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(var pos in num){
    console.log(`O valor de ${pos} é ${num[pos]}`)
}