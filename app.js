import { tiny } from './index.js';
const stringToArr = str => [...str]
const reverseArr = arr => arr.reverse()
const arrToString = arr => arr.join('')
const reverseString = tiny.pipe(stringToArr, reverseArr, arrToString);

console.log(reverseString('helllllooooo'))
