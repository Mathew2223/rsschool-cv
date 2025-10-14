function transform(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--double-next') {
            if (i + 1 < arr.length) {
                res.push(arr[i + 1]);
            }
        }
        else if (arr[i] == '--discard-prev') {
            if (res.length > 0) {
                res.pop();
            }
        }
        else {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(transform([1, 2, 3, '--double-next', 4, 5]))