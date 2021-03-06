function addtoexpression(button) {
    input.value += button.textContent;
}

function addoperatortoexpression(button) {
    input.value = input.value + " " + button.textContent + " ";
}

function precedence(a, b) {
    let pr = "/*";
    if (a == b) {
        return true;
    }else if ((a + b).includes("+-")) {
        return true;
    } else if ((a + b).includes("*/")) {
        return true;
    } else if (pr.includes(a)) {
        return true;
    } return false;
}

function infixToPostfix(infixExpr) {
    let infix = infixExpr.split(" ");
    op_stack = [];
    postfix = [];

    for (i of infix) {
        if (i.match(/[0-9a-zA-Z]+$/)) {
            postfix.push(i);
        } else if (op_stack.length == 0) {
            op_stack.push(i); 
        } else if (i == "^") {
            op_stack.push("**");
        } else {
            while (op_stack.length > 0 && precedence(op_stack[op_stack.length - 1], i)) {
                postfix.push(op_stack.pop());
            } op_stack.push(i);
        }
    } while (op_stack.length > 0) {
        postfix.push(op_stack.pop());
    }
    let res = postfix.join(" ");
    console.log(res);  
    return postfix;

}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function power(x, y) {
    return x ** y;
}

function divide(x, y) {
    if (y == 0) {
        answer.value = "Wrong input";
        return "wrong input";
    } return x / y;
}

function postfixEval(postfix) {
    let operand = [];
    for (ex of postfix) {
        if (!ex.match(/^[0-9a-zA-Z]+$/)) {
            let y = operand.pop();
            let x = operand.pop();
            let temp;
            switch (ex.trim()) {
                case "+":
                    temp = add(Number(x), Number(y));
                    break;
                case "-":
                    temp = subtract(Number(x), Number(y));
                    break;
                case "*":
                    temp = multiply(Number(x), Number(y));
                    break;
                case "**":
                    temp = power(Number(x), Number(y));
                    break;
                case "/":
                    temp = divide(Number(x), Number(y));
                    break;
                default:
                    temp = " ";
                    break;
            }
            operand.push(temp.toString());
        } else {
            operand.push(ex)
        }
    } 
    let res = operand[0];
    console.log(operand);
    return res;
}


const input = document.querySelector("#userInput");
const answer = document.querySelector("#answer");

document.querySelector("#clear").addEventListener("click", function(){
    input.value = "";
    answer.value = "";
});

document.querySelector("#backspace").addEventListener("click", function(){
    input.value = input.value.substring(0, input.value.length - 1).trim();
});

document.querySelector("#evaluate").addEventListener("click", function() {
    answer.value = postfixEval(infixToPostfix(input.value.toString().replaceAll("^", "**"))).toString();
});

const numbersBtn = document.querySelectorAll(".expression");
numbersBtn.forEach( button => 
    button.addEventListener("click", function(){
        addtoexpression(button);  
    })
);

const operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach( button => 
    button.addEventListener("click", function(){
        addoperatortoexpression(button);
    })
);

document.querySelector("#squareroot").addEventListener("click", function() {
    answer.value = Math.sqrt(Number(input.value)).toFixed(3);
});
