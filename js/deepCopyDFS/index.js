function deepCopyDFS(origin) {
  let stack = []; // 深度优先使用栈，广度优先使用队列
  let map = new Map(); // 记录出现过的对象

  let target = getEmpty(origin);
  console.log(target);

  if (target !== origin) {
    stack.push([origin, target]);
    map.set(origin, target);
  }

  console.log(stack);
  console.log(map);

  while (stack.length) {
    let [ori, tar] = stack.pop();
    console.log(ori);
    console.log(tar);
    console.log(tar === target);
    for (let key in ori) {
      console.log(key)
      if (map.get(ori[key])) {
        tar[key] = map.get(ori[key]);
        continue;
      }
      tar[key] = getEmpty(ori[key]);
      if (tar[key] !== ori[key]) {
        stack.push(ori[key], tar[key]);
        map.set(ori[key], tar[key]);
      }
    }
  }
  return target;
}

var result = deepCopyDFS({ a: 1 });
console.log(result);

function getEmpty(o) {
  if (Object.prototype.toString.call(o) === '[object Object]') {
    return {};
  }
  if (Object.prototype.toString.call(o) === '[object Array]') {
    return [];
  }
  return o;
}
