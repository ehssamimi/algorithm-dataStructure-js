const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
//push
strings.push('e'); //o(1)

//pop
strings.pop(); //o(1)

//unshift
strings.unshift('x') //o(n)

//splice
strings.splice(2, 0, 'alien'); //o(n)




