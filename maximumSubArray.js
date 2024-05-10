//by brute force approach time complaxity O(n2)+ O(n)

function maxSubArray(arr){
    let maxsub=-Infinity;
   
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum>maxsub){
                maxsub=sum;
            }
        }
        
    }
    return maxsub;

}

const arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let value=maxSubArray(arr);
console.log(value);