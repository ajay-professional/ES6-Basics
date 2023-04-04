const a = [1, 3, 5, 2, 4];
const result1 = a.filter((x, i) => {
    if (i % 2 == 0 || i == 0) {
       return x;
    }
});

console.log(result1);