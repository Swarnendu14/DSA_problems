let arr=[5,2,8,1,7,3];
let min=Number.MAX_SAFE_INTEGER;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<min)
        min=arr[i];
}
console.log(min);