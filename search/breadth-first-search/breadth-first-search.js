const bfs = (list, initialVertex, destination) => {
    let queue = []
    queue.push(initialVertex)
    initialVertex.visited = true
    while(queue.length > 0) {
        let firstElm = queue.shift()
        if (list[firstElm]) {
            for (let neighbor of list[firstElm]) {
                if (!neighbor.visited) {
                    queue.push(neighbor)
                    neighbor.visited = true
                    if (neighbor === destination) return `элемент найден: ${neighbor} в ключе ${firstElm}`
                }
            }
        }
    }

    return false
}


const list = {
    A: ['B','C','D'],
    B: ['E','F'],
    C: ['G','X']
}

console.log(bfs(list, 'A', 'X'))
