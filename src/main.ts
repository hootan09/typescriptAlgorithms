import { 
    BubbleSort,
    SelectSort,
    InsertSort,
    BinarySearch,
} from "./dataStructures";

console.log("---------- TypeScript Algorithms ----------");

/* 
* Bubble Sort
*/
// let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
// console.log('UnSorted: ', unSortedArray)
// let sorted:Array<number> = BubbleSort.sort(unSortedArray);
// console.log(' Bubble Sort: ', sorted);

//---------------------------------------------------------------

/**
 * Select Sort
 */
// let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
// console.log('UnSorted: ', unSortedArray)
// let sorted:Array<number> = SelectSort.sort(unSortedArray);
// console.log(' Select Sort: ', sorted);

//---------------------------------------------------------------
/**
 * Insert Sort
 */
// let unSortedArray: Array<number> = [6,5,4,3,2,1,7,8,0,9]
// console.log('UnSorted: ', unSortedArray)
// let sorted:Array<number> = InsertSort.sort(unSortedArray);
// console.log(' Insert Sort: ', sorted);

//---------------------------------------------------------------
/**
 * Binary Search (works on sorted array)
 */
let sortedArray: Array<number> = [0,1,2,3,4,5,6,7,8,9]
let value: number = 8;
let index:number = BinarySearch.search(sortedArray,value);
console.log('Binary Search --- value: ', value ,' finded index: ', index);

//---------------------------------------------------------------