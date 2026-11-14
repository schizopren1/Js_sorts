//Bubble Sort
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

const arr = [1, 45, 965, 43, 76, 90, -2];

console.log("Original array:", [...arr]); 
const sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);