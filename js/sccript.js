// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// const numbers = [45, 4, 9, 16, 25];

// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len; ) {
//   text += cars + "<br>";
//   i++;
// }



// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
// }

// document.getElementById("headding").innerHTML = text;
// document.getElementById("demo").innerHTML = txt;
// console.log(text);
// console.log(txt);
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
// }
// console.log(txt);
// const fruits = ["banana", "orange", "Apple", "mango"];

// const summerFruits = [];
// summerFruits[0] = ["apple", "banana", "lici"];
// summerFruits[1] = {payara:"green" , papaya:4};
// summerFruits[3] = "amader fal";
// let x = summerFruits.flat();
let namta = document.getElementById("namta");
let nums = [1,2,3,4,5,6,7,8,9,10];
let num = ""

for(let i = 0; i < 11; i++){
    num +=5 + "x" + nums[i] + "=" + nums[i]*5 + "<br>";
};

namta.innerHTML = num;