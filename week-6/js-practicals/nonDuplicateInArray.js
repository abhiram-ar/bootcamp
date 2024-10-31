let arr = [1, 2, 3, 1, 3, 5];

const freqMap = new Map();

for (let num of arr) {
    if (freqMap.has(num)) {
        freqMap.set(num, freqMap.get(num) + 1);
    } else {
        freqMap.set(num, 1);
    }
}

console.log(freqMap);

const unique = [];
for (let [key, value] of freqMap.entries()) {
    if (value === 1) unique.push(key);
}

console.log(unique);
