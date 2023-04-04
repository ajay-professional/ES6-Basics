const a = [1, 3, 5, 2, 4];
const result3 = a.map(x=>x*x).filter((y, i) => {
    if (i % 2 == 0 || i == 0) {
        return y;
    }
});

console.log(result3);