/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    let min = this.stack[0] ? this.stack[0].min : null;
    if (min === null) this.stack.unshift({ val: x, min: x });
    else {
      this.stack.unshift({ val: x, min: Math.min(x, min) });
    }
    return this;
  }

  pop() {
    this.stack.shift();
    return this;
  }

  top() {
    return this.stack.length ? this.stack[0].val : null;
  }

  getMin() {
    return this.stack.length ? this.stack[0].min : null;
  }
}

let minStack = new MinStack();

minStack.push(-2).push(-1);
minStack.push(0);
console.log(-2 === minStack.getMin());
console.log(0 === minStack.top());
minStack.push(-3);
console.log(-3 === minStack.getMin());
console.log(-3 === minStack.top(-3));
minStack.pop();
console.log(0 === minStack.top());
console.log(-2 === minStack.getMin());
console.log(minStack.stack);
