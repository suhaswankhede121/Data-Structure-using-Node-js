
function  jumpGame(arr){
    if(arr.length<=1){
        return 0;
    }

    let jump=1;
    let maxRange=arr[0];
    let step=arr[0];

    for(let i=1;i<arr.length;i++){
        if(i==arr.length-1){
            return jump;
        }

        maxRange=Math.max(maxRange,i+arr[i]);
        step--;
        if(step==0){
            jump++;
            step=maxRange-i;
        }
    }
    return jump;
}
console.log(jumpGame([1,2,3,6,9]));