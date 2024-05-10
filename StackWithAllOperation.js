class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.length=0;
    }


    //insert at top

    push(data){
        const newNode=new Node(data);
        if(!this.length){
            this.top=newNode;

        }else{
            newNode.next=this.top;
            this.top.next=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        const temp=this.top;
        if(!this.length){
            return null;
        }
        if(this.length==1){
            this.top=null;
        }else{
            this.temp=this.top.next;
            this.top.next=null;
        }
        this.length--;
        return temp;
    }

    peek(){
        return this.top;
    }


}

const st=new Stack();
st.push(1);
st.push(2);
st.push(3);
console.log(st);

st.pop();
//console.log(JSON.stringify(st));
console.log('top');
console.log(st.peek())
console.log(st.length)