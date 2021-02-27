function fact(n) {
   if (n === 0 || n ===1 ) {
       return 1
   }
   // O(n)
   return n * fact(n-1)
}

const fact2 = (n) => {
    let accum = 1
    for (let i = 1; i <= n; i++) {
        accum *= i
    }
    return accum
}

console.log(fact2(5))


// Ребенок поднимается по лестнице из n ступеней. За один шаг он может переместиться на один, два, три ступени. Найти количество возможных вариантов перемещения ребенка по лестнице

// Для рекурсии две вещи
// 1) Базовый случай
// if (n < 0) return 0
// if (n ===0) return 1
// 2) рекуррентное соотношение
// c[n] = c[n-1] + c[n-2] + c[n+3] сколько путей на n ступень
// c[3] = c[2] + c[1] + 0 базовый случай = 2+1+1 = 4

// function countWays(n) {
//      if (n < 0) return 0
//      if (n === 0) return 1
//     // O(n^3)
//     return countWays(n-1) + countWays(n -2) + countWays(n-3)
// }

function countWays(n, cache = []) {
    if (n < 0) return 0
    if (!cache[n]) {
        if (n === 0) {
            cache[n] = 1
        } else {
            cache[n] = countWays(n-1, cache) + countWays(n -2, cache) + countWays(n-3, cache)
        }
    }
    return cache[n]
}

console.log(countWays(12))
