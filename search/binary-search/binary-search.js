const binarySearch = (arr, target) => {
    let min = 0
    let max = arr.length -1
    while (min <= max) {
        let middleIdx = Math.floor((min + max) / 2)
        let quess = arr[middleIdx]

        if (quess == target) {
            return `Число найдено ${target} по индексу ${middleIdx}`
        }
        if (quess > target) {
            max = middleIdx - 1
        } else {
            min = middleIdx + 1
        }
    }

    return `Число  не найдено`
}


const sort = binarySearch([1,2,3,4,5,6,7,8,9,10], 4)
console.log(sort)
