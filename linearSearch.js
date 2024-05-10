function search(Array,target){
    let count=0;
    for(let i=0;i<Array.length;i++){
        if(Array[i]==target){
            count++;
            //console.log(" "+Array[i]);
        }
    }
    if(count!=0){
        console.log("found");
    }else{
        console.log("not found");
    }
}
Array=[1,23,4,4,87,4];
let arr=search(Array,90);
