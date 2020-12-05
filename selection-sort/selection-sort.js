const SelectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++ ) {
        let smallestIdx = i

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx=[j]
            }
        }

        if (arr[i] > arr[smallestIdx]) {
            let swap = arr[i]
            arr[i] = arr[smallestIdx]
            arr[smallestIdx] = swap
        }
    }

    return arr

}


const sort = SelectionSort([9,3,4,1,8,5,6,7,33, 32,2,90])
console.log(sort)
