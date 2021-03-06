const binarySearch = (arr, target) => {
    let min = 0
    let max = arr.length -1
    while (min <= max) {
        let middleIdx = Math.floor((min + max) / 2)
        let quess = arr[middleIdx]

        if (quess == target) {
            return middleIdx
        }
        if (quess > target) {
            max = middleIdx - 1
        } else {
            min = middleIdx + 1
        }
    }

    return -1
}

const array = [0,4,6,1,5,3,2,1,7,6,10,3,2,1,110,1]

array.sort((a,b) => a-b)
// const countFreg = (arr, el) => {
//     const positionElm = binarySearch(arr, el)
//     if (positionElm == -1) return 0
//
//     let i = positionElm
//
//     while (arr[i] == el) {
//         // console.log('i',i)
//         // console.log('left',arr[i], i)
//         i--
//     }
//
//     let j = positionElm
//     while (arr[j] == el) {
//         // console.log('j',j)
//         // console.log(arr[j], j)
//
//         j++
//     }
//     console.log('arr', arr)
//     console.log('j',j)
//     console.log('i',i)
//     return j - i - 1
// }


const countFreg = (arr, el) => {
    let positionElm = binarySearch(arr, el)

    if(positionElm == -1) return 0

    let leftIndex = positionElm
    while (arr[leftIndex] == el) {
        leftIndex--
    }

    let rightIndex = positionElm
    while (arr[rightIndex] == el) {
        rightIndex++
    }

    return rightIndex - leftIndex -1

}


console.log(countFreg(array, 1))
