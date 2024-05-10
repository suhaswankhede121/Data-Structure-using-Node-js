class Node{
    constructor(){
        this.data=0;
        this.priority=0;
        this.next=null;
    }
}

function newNode( d,p){
    let temp=new Node();
    temp.data=d;
    temp.priority=p;
    temp.next=null;
    return temp;
}

function push(head,d,p){
    var start=head;
    let temp=newNode(d,p);
    if(head.priority>p){
        temp.next=head;
        head=temp;
    }else{
        while(start.next!=null && start.next.priority<p){
            start=start.next;
        }
        temp.next = start.next;
         start.next = temp;

    }
    return head;
}

function pop(head){
   // let temp=head;
    head=head.next;
    return head;
}

var pq = newNode(4, 1);
pq = push(pq, 5, 2);
pq = push(pq, 6, 3);
//pq = push(pq, 7, 0);
console.log(JSON.stringify(pq));
pq=pop(pq);
console.log(pq)


