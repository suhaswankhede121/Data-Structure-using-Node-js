function pascalTriangle(n){
    if(n==0){
        return [];
    }else if(n===1){
        return [[1]];
    }else{
        const prevTriangle=pascalTriangle(n-1);
        const prevRow=pascalTriangle[pascalTriangle.length-1];
        const newRow=[1];
        for(let i=1;i<prevRow.length;i++){
            newRow.push(prevRow[i-1]+prevRow[i]);
        }
        newRow.push(1);
        return [...prevTriangle,newRow];
    }
}
const triangle=pascalTriangle(5);
console.log(triangle);