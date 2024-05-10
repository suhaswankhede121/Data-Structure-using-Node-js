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

    reverse(){
        let reverseStack=new Stack();
        while(!this.isEmpty()){
            reverseStack.push(this.pop());
        }
        return reverseStack;
    }
}

const arr=new Stack();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(7);
arr.push(0);
//console.log(arr);
//arr.pop();
//console.log(arr);
//console.log(arr.peek())
let get=arr.reverse();
console.log(get);