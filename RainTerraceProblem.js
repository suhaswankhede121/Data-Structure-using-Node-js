function calculateWater(arr){
    let n=arr.length;
    let left=0,right=n-1;
    let leftmax=0,rightmax=0;
    let water=0
    while(left<=right){
        if(arr[left]<=arr[right]){
            if(arr[left]>leftmax){
            leftmax=arr[left];
        }else{
            water +=leftmax-arr[left];
        }
        left++;
    }else{
        if(arr[right]>rightmax){
            rightmax=arr[right];
        }else{
            water +=rightmax-arr[right];
        }
        right--;
    }
       
    }
    return water;

}
let terrace=[3,0,1,0,5];
let get=calculateWater(terrace);
console.log(" Water Level should be filled :", get);