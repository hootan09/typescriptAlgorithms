import { BubbleSort } from "./dataStructures";

console.log("---------- TypeScript Algorithms ----------");

let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
console.log('UnSorted: ', unSortedArray)
let sorted:Array<number> = BubbleSort.sort(unSortedArray);
console.log(' Sorted: ', sorted);
