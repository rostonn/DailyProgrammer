function parensChecker(string){
  var left = 0;
  var right = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) == '\('){
      left += 1;
    }
    else if(string.charAt(i) == '\)'){
      right += 1;
    }
  }
  return left == right;
}

var s = '(())';
var n = '((((()))';

console.log(parensChecker(s));
console.log(parensChecker(n));
