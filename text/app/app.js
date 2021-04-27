// 0-99的定時炸彈

let ans = Math.floor(Math.random()*100);
let n1 = 0;
let n2 = 99;

while(true){
  let guess = prompt('請輸入'+n1+'~'+n2+'之間的答案');
  if(guess > n2 || guess < n1){
    alert('輸入正確數字');
    continue;
  }
  if(guess == ans){
    alert('恭喜答對!!!!');
    break;
  }else if(guess > ans){
    n2 = guess;
  }else if(guess <= ans){
    n1 = guess;
  }
}