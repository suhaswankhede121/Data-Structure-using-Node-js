class CircularQueue{
    constructor(maxcapacity){
        this.data=new Array(maxcapacity);
        this.capacity=maxcapacity;
        this.currentLength=0;
        this.front=-1;
        this.rear=-1;

    }

    isEmpty(){
        return this.currentLength===0;
    }
    isFull(){
        return this.currentLength===this.capacity;
    }
    enqueue(data){

        if(!this.isFull()){
            this.rear=(this.rear+1)%this.capacity;
            this.data[this.rear]=data;
            this.currentLength++;
            if(this.front==-1){
                this.front=this.rear;
            }
        }
        return data;
    }
    dequeue(){
        let temp=this.data[this.front];
        if(this.isEmpty())
        return null;
            this.data[this.front]=null;
            this.front=(this.front+1)%this.capacity;
            this.currentLength--;
            if(this.isEmpty()){
                this.front=-1;
                this.rear=-1;
            }
            return temp;
        }
    
    }

const cq=new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
console.log(cq);
cq.dequeue();
console.log(cq);

