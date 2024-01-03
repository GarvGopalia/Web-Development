let cars = ['audi','bmw','maruti'];
cars.push("toyota");
console.log(cars);
cars.push("ferrari");
console.log(cars);
cars.pop();
console.log(cars);

cars.unshift("ferrari");
console.log(cars);
cars.shift("ferrari");
console.log(cars);

let primary = ['red','yellow','blue'];
let pri = primary.includes("red");
console.log(pri);
let secondary =['orange','green','violet'];
let allColor = primary.concat(secondary);
console.log(allColor);  
primary.reverse();
console.log(primary);

let colors = ["red","yellow","white","orange","pink","white"];
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","blue"));
console.log(colors);

colors.sort();
console.log(colors);