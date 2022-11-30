let bag = "";
let num1 = num.toString();

for (let i=num1.length-1; i>=0; i--){
    bag += num1[i];
} 
if (bag !== num1){
    console.log("Yes");
} else {
    console.log("No")
}