let arr=[5,2,8,1,3,4,12,7];
let sum=0;
arr.forEach(x=>x%2==0?sum+=x:null);
console.log(sum);