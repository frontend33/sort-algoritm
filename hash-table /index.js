class HashTable {
    store = new Array(10)

    hash(key) {
        let sum = 0
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i)
        }
        return sum
    }

    add(key, value) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || []
        this.store[this.hash(key)].push({key, value})
    }

    get(key) {
        return this.store[this.hash(key)].find((item) => item.key === key).value
    }
}

const dict = new HashTable()
dict.add('ab', '1')
dict.add('ba', '2')

// const dict = new Map()
// dict.set('ab', '1')
// dict.set('ba', '2')

console.log('dict', dict.get('ab'), dict.get('ba'))
