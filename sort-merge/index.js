const sortArr = (arrLeft, arrRight) => {
    const arraySort = []
    let leftIdx = 0
    let rightIdx = 0

    while ( leftIdx < arrLeft.length && rightIdx < arrRight.length ) {
        if (arrLeft[leftIdx] < arrRight[rightIdx]) {
            arraySort.push(arrLeft[leftIdx])
            leftIdx++
        } else {
            arraySort.push(arrRight[rightIdx])
            rightIdx++
        }
    }
    while (leftIdx < arrLeft.length) {
        arraySort.push(arrLeft[leftIdx])
        leftIdx++
    }

    while (rightIdx < arrRight.length) {
        arraySort.push(arrRight[rightIdx])
        rightIdx++
    }
    return arraySort

}

const sortMerge = (arr) => {

    if (arr.length <= 1) {
        return arr
    }

    const half = Math.ceil(arr.length / 2);

    const firstHalf = arr.slice(0, half)
    const secondHalf = arr.slice(half)

    return sortArr(sortMerge(firstHalf), sortMerge(secondHalf))

}

const sort = sortMerge([9,3,4,1,8,5,6,7,33, 32,2,90])
console.log(sort)
