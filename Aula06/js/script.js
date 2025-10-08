for (i=0; i<=10;i++){
    console.log(i);
}

i=0;
while(i<=10){
    console.log(i);
    i++;
}

i=0;
do{
    console.log(i);
    i++;
}while(i<=10);

notas = [10, 5, 3, 9];
for(i=0; i<4; i++){
    console.log(notas[i]);
}

notas.push(8);
console.log(notas);

notas.pop();
console.log(notas);

notas.unshift(6);
console.log(notas);

notas.shift();
console.log(notas);