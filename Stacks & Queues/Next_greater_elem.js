function nge ( arr ) {
    let stack = [];
    let res = new Array();

    for ( let i = arr.length - 1; i >= 0; i-- ) {
        while ( stack.length > 0 && stack[stack.length - 1] <= arr[i] ) {
            stack.pop();
        }

        res[i] = stack.length > 0 ? stack[stack.length-1] : -1;

        stack.push(arr[i]);
    }
    return res;
}