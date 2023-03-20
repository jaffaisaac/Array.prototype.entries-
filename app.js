const fruits = ['mango','banana','oranges'];

const efriults = fruits.entries();

// console.log(efriults.next().value)
// console.log(efriults.next().value)
// console.log(efriults.next().value)
// console.log(efriults.next().done)


// you can also use for-of loop over the iterator to return frults.entries()

for(let results of efriults){
    console.log(results)
}