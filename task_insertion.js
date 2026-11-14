//Insertion Sort

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

let arr = [12, 45, 65, 235, 89];
console.log("Original array:", arr);
insertionSort(arr);
console.log("After sorting:", arr);
