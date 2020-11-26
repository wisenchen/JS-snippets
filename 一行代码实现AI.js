function robot(input) {
 return input.replace(/\？$/,'！').replace(/(吗|没)/,'').replace(/^你/,'我');
}
robot('你吃了吗？'); // 我吃了！
robot('你们到了没？'); // 我们到了！
