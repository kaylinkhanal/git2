//calcualte total percentage using for in loop

const scores = {
    math: 30,
    english: 100,
    science: 90,
}

let sum =0 
for (let item in scores ) {
sum = sum + scores[item]
}

console.log(sum/450 * 100);