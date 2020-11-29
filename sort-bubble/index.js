const sortBubble = (array => {
    for (let i = 0; i < array.length; i++) {
        let isSwap = false
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j +1]) {
                const swap = array[j]
                array[j] = array[j +1]
                array[j + 1] = swap
                isSwap = true;
            }
        }

        if (!isSwap) break;
    }

    return array

})

const sort = sortBubble([9,3,4,1,8,5,6,7,33, 32,2,90])
console.log(sort)
