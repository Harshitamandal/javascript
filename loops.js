//for loop:-

for(let i = 1;i<11;i++){
    console.log(`2 * ${i} = ${2*i}`)
}

//while loop:-

let j = 0;
while(j<5){
    console.log(`sum of ${j} and 5 is equals to ${j+5}`);
    j++
    
}


//do while loop:-

let k = 10;
do {
    console.log('hello world')
    k++
}
while(k<10)

//do while loop can work if we take initial value and condition value bcz code executes line by line.

//for in loop:-

//for object:
let games={
    indoor:'chess',
    outdoor:'cricket'
}

for( value in games){
    console.log(games[value])
    console.log(value)
}

//for array:
let names = ['aryan','harshu','mandal','sharma']

for(value in names){
    console.log(value, names[value])
}

//for of loop:

for(val of names){
    console.log(val)
}