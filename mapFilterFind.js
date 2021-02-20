// Map, filter, find
//=============================

const numbers = [1, 3, 4, 5, 7, 8, 9]

const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const resultSecond = element * element;
    output.push(resultSecond);
}

function square (element){ 
    return element * element;
}
const resultThird = numbers.map(function(element){
    return element * element;
});

const resultThird = numbers.map(x => x * x)
console.log(resultThird);

const biggerFirst = numbers.filter(x => x < 5)
console.log(biggerFirst);    

const isThere = numbers.find(x => x > 5)
console.log(isThere);    



// apply map, filter, find on array of object 
//=============================================

const students = [
    {id: 20, name: "jim kwik"},
    {id: 21, name: "sandeep"},
    {id: 45, name: "samiha"},
    {id: 51, name: "kumar sanu"}
];
const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
   console.log(ids);

const bigger = students.filter(s => s.id > 40);
console.log(bigger);

const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);
