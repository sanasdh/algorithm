const insertionSort = (arr) =>{
  let n = arr.length;
  let key, temp;
  for(let i=1; i<n ;i++){
    console.log("first",arr) 
    for(let j=0; j<i; j++){
      if(arr[j]>arr[i]){
        temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp
      }
          console.log("then",arr)
    }
  }
  return arr
}