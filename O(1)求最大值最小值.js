/**
 * 方法一、维护两个栈，maxStack栈始终存放最大值
 */
class Max {
    stack = []
    maxStack = []

    push(value) {
        this.stack.push(value); // 正常进栈
        if (this.maxStack.length === 0) { // 初始态
            this.maxStack.push(value)
        } else { // 当前值大于栈顶（最大值）, 更新
            let last = this.maxStack[this.maxStack.length - 1]
            if (last <= value) { // 如果前提是添加不重复元素，可以直接last<value
                this.maxStack.push(value)
            }
        }
    }

    pop() {
        let popValue = this.stack.pop(); // 正常出栈
        let lastMaxStackValue = this.maxStack[this.maxStack.length - 1];
        if (popValue === lastMaxStackValue) { // 出栈值是当前的最大值，删除最大值
            this.maxStack.pop()
        }
    }

    getMax() {
        return this.maxStack[this.maxStack.length - 1]
    }

}


/**
 * 方法二, 只用一个栈
 */
class Min {
    stack = []
    min = Number.MAX_SAFE_INTEGER

    push(value) {
        this.stack.push(value); // 正常进栈

        if (this.min >= value) { // 值小于最小值
            this.stack.push(this.min, value); // 最小值先进栈 --- 为了保存当前最小值，防止直接替换掉
            this.min = value // 更新最小值
        }

    }

    pop() {
        let popValue = this.stack.pop(); // 正常出栈
        if (popValue === this.min) { // 最小值与出栈值相等，
            this.min = this.stack.pop() // 取出之前保存的上一次最小值，更新
        }
    }

    getMin() {
        return this.min
    }

}



let test = new Max();
test.push(2);
console.log(test.getMax()) // 2

test.push(3)
console.log(test.getMax()) // 3

test.push(1)
console.log(test.getMax()) // 3

test.push(3)

console.log(test.getMax()) // 3

test.pop()

console.log(test.getMax()) // 3

test.pop()

console.log(test.getMax()) // 3

test.push(0.5)

console.log(test.maxStack, test.stack) // 2

console.log('------------------------------------')

let testMin = new Min();

testMin.push(1);

console.log(testMin.getMin()) // 1

testMin.push(1);

console.log(testMin.getMin()) // 1

testMin.push(0.5);

console.log(testMin.getMin()) // 0.5

testMin.push(2);

console.log(testMin.getMin()) // 0.5

testMin.pop();

console.log(testMin.getMin()) // 0.5

testMin.pop();

console.log(testMin.getMin()) // 1