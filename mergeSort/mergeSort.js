
const mergsort =(arr)=>{
  if(arr.length <= 1){
    return arr
  }
let length= Math.floor(arr.length/2)
let mergeLeft = arr.slice(0, length)
console.log({mergeLeft})
let  mergeRight= arr.slice(length)
console.log({mergeRight})
return merge(mergsort(mergeRight), mergsort(mergeLeft))
}

const merge =(right, left)=> {
  let newarr= []
  while(right.length>0 && left.length>0){
    if(right[0]<=left[0]){
      newarr.push(right.shift())
    }else{
      newarr.push(left.shift())
    }
  }
while(right.length){
    newarr.push(right.shift())
  }
  while(left.length){
    newarr.push(left.shift())
  } 
  return newarr
}

console.log(mergsort([5,4,3,8,9,1,7]))

