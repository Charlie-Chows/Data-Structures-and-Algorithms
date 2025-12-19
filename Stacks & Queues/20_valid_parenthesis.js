
function isValid(s) {
    let stack = [];
    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        else {
            if (stack.length === 0) return false;

            let elem = stack.pop();

            if (ch === ')' && elem === '(' ||
                ch === '}' && elem === '{' ||
                ch === ']' && elem === '['
            ) {
                continue;
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}


let s = "()[]{}";
console.log(isValid(s));  // true
