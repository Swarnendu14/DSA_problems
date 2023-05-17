let arr=[5,2,8,9,7,0];
let min;
let indx=0;
for(let i=0;i<2;i++)
{
    min=Number.MAX_SAFE_INTEGER;
    for(let j=0;j<arr.length-i;j++)
    {
        if(arr[j]<min)
        {    
            min=arr[j];
            indx=j;
        }
    }
    let temp=arr[indx];
    arr[indx]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
console.log(arr[arr.length-2]);
