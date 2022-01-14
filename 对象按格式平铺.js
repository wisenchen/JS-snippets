// https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247483880&idx=1&sn=f085ec6e7482fdd82857c64b5acf7d9a&chksm=c3194028f46ec93e5767eb5ab97a0da707589b630543b599be46991902df07ae1cab066460e0&token=1742237627&lang=zh_CN#rd
const obj = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 5
        }
    },
    b: [1, 3, {
        a: 2,
        b: 3
    }, [1, 2], [{
        aa: 11,
        b: 2,
        cd: [{
            de: 1
        }, 2]
    }]],
    c: 3
}
// 初版
function flatten1(obj, path='') {
    if (typeof obj !== 'object')
        return obj;
    if (Array.isArray(obj)) {
        const res = {};
        for (let i = 0; i < obj.length; i++) {
            let newPath = `${path}[${i}]`;
            if (typeof obj[i] === 'object') {
                newPath += Array.isArray(obj[i]) ? '' : '.'
                Object.assign(res, flatten(obj[i], newPath))
                continue;
            }
            res[newPath] = obj[i];
        }
        return res;
    }
    const keys = Object.keys(obj);
    return keys.reduce((p,c)=>{
        if (typeof obj[c] === 'object') {
            const newPath = Array.isArray(obj[c]) ? `${path + c}` : `${path + c}.`;
            return {
                ...p,
                ...flatten(obj[c], newPath)
            }
        }
        return {
            ...p,
            [path + c]: obj[c]
        }
    }
    , {})
}
// 优化
function flatten(obj, path='') {
    if (typeof obj !== 'object')
        return obj;
    const res = {};
    const isArrayFlag = Object.prototype.toString.call(obj) === '[object Array]';
    for (const key in obj) {
        const keyStr = isArrayFlag ? `[${key}]` : key;
        if (typeof obj[key] === 'object') {
            const nextPath = Object.prototype.toString.call(obj[key]) === '[object Array]' ? path + keyStr : path + keyStr + '.';
            Object.assign(res, flatten(obj[key], nextPath));
            continue;
        }
        res[path + keyStr] = obj[key];
    }
    return res;
}
console.log(flatten(obj));
/*  result
{
  a.b: 1
  a.c: 2
  a.d.e: 5
  b[0]: 1
  b[1]: 3
  b[2].a: 2
  b[2].b: 3
  b[3][0]: 1
  b[3][1]: 2
  b[4][0].aa: 11
  b[4][0].b: 2
  b[4][0].cd[0].de: 1
  b[4][0].cd[1]: 2
  c: 3
}
*/
