function countWay(n){
    if(n<=1){
        return 1;
    }else if(n==2){
        return 2;
    }else{
        return countWay(n-1)+countWay(n-2)+countWay(n-3);

    }
}
const n=3;
const way=countWay(n);
console.log("Count No of Ways to reach top: ",way);