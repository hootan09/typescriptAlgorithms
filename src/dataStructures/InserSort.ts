export default class InsertSort {
    static sort(unSortedArray: Array<number>) {
        let arrays: Array<number> = unSortedArray;
        for (let i = 0; i < arrays.length; i++) {
            let insertElement: number = arrays[i];//Take unsorted new elements
            let insertPosition: number = i; //Inserted position
            for (let j = insertPosition - 1; j >= 0; j--) {
                //If the new element is smaller than the sorted element,shifted to the right
                if (insertElement < arrays[j]) {
                    arrays[j + 1] = arrays[j];
                    insertPosition--;
                }
            }
            arrays[insertPosition] = insertElement;//Insert the new element
        }
        return arrays;
    }
}