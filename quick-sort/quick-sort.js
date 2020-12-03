const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    } else {
        const pivot = arr[0]
        const left = []
        const right = []
        for (let i = 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return [...quickSort(left),pivot, ...quickSort(right)]
    }

}


const sort = quickSort([9,3,4,1,8,5,6,7,33, 32,2,90])
console.log(sort)
