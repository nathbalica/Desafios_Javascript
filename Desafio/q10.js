function findValue(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i
        }
    }
}

console.log(findValue([10, 30, 50, 70, 90] , 50))