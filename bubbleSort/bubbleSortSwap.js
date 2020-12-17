const bubbleSortSwap =(arr)=>{
  let n = arr.length;
  let result = true;
  let temp
  while(result){
    result=false;
    for (let i=0;i<n;i++){
      if(arr[i]>arr[i+1]){
        temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        result = true
      }
    }
  }
  return arr
}

console.log(bubbleSortSwap([2,1,6,3,5,4]))