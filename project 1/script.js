function fb(arr){
 for(var i=0;i<arr.length;i ++){
    if(arr[i] % 3 ===0){
        arr[i] = 'fizz';
    }else if(arr[i] % 5 === 0){
        arr[i] = 'buzz';
 }else if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
    arr[i] = 'fizzbuzz';
 }
}
console.log(arr);
}
var fizzBuzz = function(n) {
    let arr=[];
     for(var i=1; i <= n; i++){
 arr.push(i + '');
     }
     
     for(var i=0;i<arr.length;i ++){
         if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
         arr[i] = 'FizzBuzz';
         }else if(arr[i] % 5 === 0){
             arr[i] = 'Buzz';
      }else if(arr[i] % 3 === 0 ){
         arr[i] = 'Fizz';
      }
     }
     console.log(arr);
 };









let arr1 = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]
let fbx = fb(arr1);
console.log("----------------------------------------------------------------");
let nn = 20;
fizzBuzz(nn);
