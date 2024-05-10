
class Stack{
    constructor(){
        this.array=[];
        this.top=-1;
    }
    
    isEmpty(){
        return this.top==-1;
    }

    push(data){
       
            this.array[++this.top]=data;
        
    }

    pop(){
        if(this.isEmpty() )return 'empty'
            return this.array[this.top--];
       
    }

    peek(){
        return this.array[this.top];
    }

}

function reverseString(str){
    let arr=new Stack();
    for(let i=0;i<str.length;i++){
      arr.push(str[i]);
    }

    let reverse="";
    while(!arr.isEmpty()){
       reverse+=arr.pop();
    }
    return reverse;
}



const arr=new Stack();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
const getvalue=reverseString("suhas");//sahus
console.log(getvalue);

