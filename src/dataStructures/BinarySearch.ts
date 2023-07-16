export default class BinarySearch {
    static search(sortedArray, searchValue): number {
        let low: number = 0;
        let high: number = sortedArray.length - 1;
        let mid: number = 0;
        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            
            if (sortedArray[mid] == searchValue) {
                return mid;
            } else if (sortedArray[mid] < searchValue) {
                low = mid + 1;
            } else if (sortedArray[mid] > searchValue) {
                high = mid - 1;
            }
        }
        return -1;
    }
}