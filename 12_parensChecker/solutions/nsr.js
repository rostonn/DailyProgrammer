function parensChecker(s){
  var string = s.split('');
  for(var i = 0; i < string.length; i++){
    if(string[i] == '('){
      for(j = i+1; j < string.length; j++){
        if(string[j] == ')'){
          string[j] = '';
          string[i] = '';
          break;
        }

        }
      }
    }
    console.log(string);
    for(var i = 0; i < string.length; i++){
      if(string[i] == ')' || string[i] == '('){
        return false;
      }
    }
    return true;
}

var s = '(())';
var n = '((((()))';
var k = '()))()(';


console.log(parensChecker(s));
console.log(parensChecker("())))("));
