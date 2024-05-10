class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
       this.head=null;
       this.tail=null;
       this.length=0;
    }

    //insert from head

    insertAtHead(data){
        const newNode=new Node(data);
        if(!this.length){
              this.head=newNode;
              this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;
            this.head.next=this.tail;

        }

        this.length++;
        return this;
    }


    insertAtTail(data){
        const newNode=new Node(data);
        if(!this.length){
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.newNode=this.tail;
        }
        this.length++;
        return this;
    }

    deleteAtHead(){
        const temp=this.head;
        if(!this.length){
            return undefined;
        }
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
            temp.next=this.head;
            this.head=null;
        }
        this.length--;
        return temp;
    }

    deleteAtTail(){
        const temp=this.tail;
        if(!this.length){
            return undefined;
        }
        if(this.length==1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=this.temp;
            this.tail.next=null;
        }
        this.length--;
        return temp;
    }
}

const list=new SinglyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
console.log(list);
list.insertAtTail(3);
console.log(list);
//list.deleteAtHead();
//console.log(list);
list.deleteAtTail();
console.log(list);