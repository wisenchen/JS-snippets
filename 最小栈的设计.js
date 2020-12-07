/**
 * @origin https://juejin.cn/book/6844733800300150797/section/6844733800354709511
 * @desc 掘金小册 - 前端算法与数据结构面试：底层逻辑解读与大厂真题训练
 * @tag 栈
 */
/**
    栈的设计——“最小栈”问题
      题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

      push(x) —— 将元素 x 推入栈中。

      pop() —— 删除栈顶的元素。
      top() —— 获取栈顶元素。
      getMin() —— 检索栈中的最小元素。

      示例:

      MinStack minStack = new MinStack();
      minStack.push(-2);
      minStack.push(0);
      minStack.push(-3);
      minStack.getMin(); --> 返回 -3.
      minStack.pop();
      minStack.top(); --> 返回 0.
      minStack.getMin(); --> 返回 -2.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.stackSort = [];
  }
  push(element) {
    this.stack.push(element);
    if (this.stackSort[this.stackSort.length - 1] > element) {
      this.stackSort.push(element);
    }
    return this.stack.length;
  }

  pop() {
    if (this.stack.pop() === this.stackSort[this.stackSort.length - 1]) {
      this.stackSort.pop();
    }
    return this.stack.length;
  }

  top() {
    if (!this.stack || !this.stack.length) {
      return;
    }
    return this.stack[this.stack.length - 1];
  }

  getMain() {
    return this.stackSort[this.stackSort.length - 1];
  }
}
