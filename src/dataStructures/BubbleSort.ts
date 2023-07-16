export default class BubbleSort {
    static sort(unSortedArray: Array<number>): Array<number> {
        let array: Array<number> = unSortedArray;
        for(let i=0; i<array.length-1;i++){
            for(let j=0; j<array.length-i-1;j++){
                //swap
                if(array[j]>array[j+1]){
                    let tmp: number = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                    //or
                    // [ array[j], array[j+1] ] = [ array[j+1], array[j] ];
                }
            }
        }
        return array;
    }
}