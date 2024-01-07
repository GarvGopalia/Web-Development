let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

let heroes = [
    ["ironman", "spiderman","thor"],
    ["superman", "wonder woder womman", "flash"]
]

for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i])
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`)
    }
}