class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;
    }
}

//var root=null;

function preorder(root){
    if(root==null)
    return;
    console.log(root);
    preorder(root.left);
    preorder(root.right);
}

const newNode=new Node(10);
//var newNode=new Node(20);
newNode.left=new Node(22);
newNode.right=new Node(43);
newNode.left.left=new Node(56);
newNode.left.right=new Node(87);
newNode.right.right=new Node(90);
newNode.right.left=new Node(32);
console.log(JSON.stringify(newNode));
console.log('Here is preorder');
console.log(preorder(newNode));