class Node
{
   constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
   }
}

class BST{
    constructor(){
        this.root=null;
    }
    Insert(data){
        const newNode=new Node(data);
        if(!this.root){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left==null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right==null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }

    findMinNode(root) {
        if (root.left === null) return root;
        else return this.findMinNode(root.left);
    }

    findMaxNode(root) {
        if (root.right === null) return root;
        else return this.findMaxNode(root.right);
    }

    
}

const B=new BST();

B.Insert(1);
B.Insert(3);
B.Insert(6);
B.Insert(0);
B.Insert(4);
B.Insert(9);
B.Insert(10);
B.Insert(7);
B.Insert(93);
B.Insert(11);
console.log(B);
console.log('max element');
console.log(B.findMaxNode(B.root).data);
console.log('min element');
console.log(B.findMinNode(B.root).data);