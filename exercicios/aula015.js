let num  = [6,7,3,1,4,2,5];
num.sort();
let pos = num.indexOf(5);
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

if(pos == -1){
    console.log(`Não foi possivel encontrar o número`);
}
else{

    console.log(`O valor está na posição ${pos}`);
}