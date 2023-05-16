let arr=[5,2,8,1,3,0];
for(var i=0;i<2;i++){  
    for(var j=0;j<arr.length-i-1;j++){  
        if(arr[j]>arr[j+1]){  
            var tempValue= arr[j];  
            arr[j]=arr[j+1];  
            arr[j+1]=tempValue;  
        }  
    }  
}
console.log(arr[arr.length-2]);