//Selection Sorts

function swap(arr, xp, yp) {
    [arr[xp], arr[yp]] = [arr[yp], arr[xp]];
}

function selectionSort(arr) {
    let n = arr.length;
    let minIndex;

    for (let i = 0; i < n - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(arr, minIndex, i);
        }
    }

    return arr;
}

const arr = [34, 67, 897, 12, 342, 54, 99];

console.log("Original array:", arr);
selectionSort(arr);
console.log("After sorting:", arr);