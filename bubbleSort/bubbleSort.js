const bubbleSort=(arr)=>{
  let n = arr.length
  let temp
  for (let i=0; i<n; i++){
    for (let j=0; j<n; j++){
      if(arr[j]>arr[j+1]){
        temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([2,1,6,3,5,4]))