const quickSort = (arr) =>{
  if(arr.length<=1){
  return arr
  }
    let n=arr.length
    let pivot=arr[n-1]
    let right=[], left=[]
    let i=0
    while(i<n-1){
      if (arr[i]<=pivot){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
      i++
      console.log({i})
    }
    if(right.length && left.length){
      return [...quickSort(left),pivot,...quickSort(right)]
    }else if(right.length){
      return [pivot,...quickSort(right)]
    }
    return [...quickSort(left),pivot]
  
  }
  
  console.log(quickSort([5,4,3,8,9,1,7]))
  
  