import { BubbleSort } from "./dataStructures";
import SelectSort from "./dataStructures/SelectSort";

console.log("---------- TypeScript Algorithms ----------");

/* 
* Bubble Sort
*/
// let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
// console.log('UnSorted: ', unSortedArray)
// let sorted:Array<number> = BubbleSort.sort(unSortedArray);
// console.log(' Sorted: ', sorted);

//---------------------------------------------------------------

/**
 * Select Sort
 */
let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
console.log('UnSorted: ', unSortedArray)
let sorted:Array<number> = SelectSort.sort(unSortedArray);
console.log(' Sorted: ', sorted);