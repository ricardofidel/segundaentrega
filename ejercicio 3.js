var n1, n2, n3, n4;
n1=prompt("ingresa un valor");
n2=prompt("ingrese un segundo valor");
n3=prompt("ingrese un tercer valor");
n4=prompt("ingresa un cuarto valor");

if(n1 > n2 && n1 > n3 && n1 > n4){
   console.log(n1);
}else if (n2 > n1 && n2 > n3 && n2 > n4){
    console.log(n2);
}else if (n3 > n1 && n3 > n2 && n3 > n4){
    console.log(n3);
}else if (n4 > n1 && n4 > n2 && n4 > n3)
console.log(n4) 