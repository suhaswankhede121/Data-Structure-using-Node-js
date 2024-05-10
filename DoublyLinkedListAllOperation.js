class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insertAtHead(data){
        const newNode=new Node(data);
        if(!this.length){
            this.head=newNode;
            this.tail=this.head;

        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.newNode=this.head;
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
           this.newNode.prev=this.tail;
           
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
            temp.next=this.tail;
            this.tail.prev=this.head;
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
            temp.prev=this.head;
            this.head.next=this.tail;
            this.tail=null;

        }
        this.length--;
        return temp;
    }







}

const list=new DoublyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
console.log(list);
//list.insertAtTail(3);
console.log('deletion at hail')
//list.deleteAtHead();
list.deleteAtTail();
console.log(list)