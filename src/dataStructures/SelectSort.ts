export default class SelectSort {
    static sort(unsortedArray: Array<number>): Array<number> {
        let arrays: Array<number> = unsortedArray;
        let len: number = arrays.length - 1;
        let minIndex: number;// Save the index of the selected minimum
        for (let i = 0; i < len; i++) {
            minIndex = i;
            //Save the minimum value of each loop as the first element
            let minValue: number = arrays[minIndex];
            for (var j = i; j < len; j++) {
                if (minValue > arrays[j + 1]) { // minimum value
                    // exchange with the minIndex
                    minValue = arrays[j + 1];
                    minIndex = j + 1;
                }
            }
            //if minimum index changes, current minimum is exchanged with the minIndex
            if (i != minIndex) {
                let temp: number = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
        return arrays;
    }
}