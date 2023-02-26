const names = ['Nusrat', 'Hurain', 'Tithi', 'Sweety', 'Hur', 'Nuha'];
const findName = names =>{
let evenName = [];
for(let name of names){
    if(name.length%2===0){
        evenName.push(name);
    }
}
return evenName;
}
let result = findName(names);
console.log(result);;