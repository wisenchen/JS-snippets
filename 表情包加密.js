// 版本1
function encodeToEmojis(text){
  // 普通数字起始编码
  const numberStartCode = 128000;
  // 小写字母起始编码
  const lowercaseStartCode = numberStartCode + 10;
  // 大写字母起始编码
  const uppercaseStartCode = lowercaseStartCode + 26;
  // 其他字符起始编码
  const othercharStartCode = 128100;
  let res = "";
  const aCode = "a".charCodeAt();
  const ACode = "A".charCodeAt();
  const zeroCode = "0".charCodeAt();
  for(let s of text) {
    const curCode = s.charCodeAt();
    if(curCode >= zeroCode && curCode < zeroCode + 10){      // 数字
      res += String.fromCodePoint(curCode-zeroCode + numberStartCode);
    }else if(curCode >= aCode && curCode < aCode + 26) {     // 小写字母
      res += String.fromCodePoint(curCode - aCode + lowercaseStartCode);
    }else if(curCode >= ACode && curCode < ACode + 26) {     // 大写字母
      res += String.fromCodePoint(curCode - ACode + uppercaseStartCode);
    }else{
      res+= String.fromCodePoint(curCode  + othercharStartCode)
     }
  }
  return res;
}
function decodeEmoji(text){
  // 普通数字起始编码
  const numberStartCode = 128000;
  // 小写字母起始编码
  const lowercaseStartCode = numberStartCode + 10;
  // 大写字母起始编码
  const uppercaseStartCode = lowercaseStartCode + 26;
  // 其他字符起始编码
  const othercharStartCode = 128100;
    let res = "";
  const aCode = "a".charCodeAt();
  const ACode = "A".charCodeAt();
  const zeroCode = "0".charCodeAt();
  for(let s of text) {
    const curCode = s.codePointAt();
    if(curCode < lowercaseStartCode){      // 数字
      res += String.fromCodePoint(curCode - numberStartCode + zeroCode);
    }else if(curCode < uppercaseStartCode) {     // 小写字母
      res += String.fromCodePoint(curCode - lowercaseStartCode + aCode);
    }else if(curCode < othercharStartCode) {     // 大写字母
      res += String.fromCodePoint(curCode - uppercaseStartCode + ACode);
    }else{
      res+= String.fromCodePoint(curCode - othercharStartCode)
     }
  }
  return res;
}

