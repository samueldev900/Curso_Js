maior = 0;
menor = 0;

num = [10,9,8,1,20]



for(i in num){

    console.log(num[i])

    if(maior,menor ==0 ){

        maior, menor = num[i];

    }

    else if(num[i] > maior){
        maior = num[i]
    }

    else if(num[i]< menor){
        menor = num[i]
    }

}

console.log(`O maior número é ${maior}`)
console.log(`O menor número é ${menor}`)