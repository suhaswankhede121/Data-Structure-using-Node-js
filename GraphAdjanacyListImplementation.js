class Graph{
    constructor(){
        this.adjanacylist={};
    }

    addVertex(v){
        if(!this.adjanacylist[v]){
            this.adjanacylist[v]=new Set();
        }
    }

    addEdges(v1,v2){
        if(!this.adjanacylist[v1]){
            this.adjanacylist(v1);
        }
        if(!this.adjanacylist[v2]){
            this.adjanacylist(v2);
        }
        this.adjanacylist[v1].add(v2);
        this.adjanacylist[v2].add(v1);
    }


    deleteEdges(v1,v2){
        this.adjanacylist[v1].delete(v2);
        this.adjanacylist[v2].delete(v1);

    }

    deleteVertex(v){
        if(!this.adjanacylist)
        return null;

        for(let i in this.adjanacylist){
            this.deleteEdges(v,i);
        }
        delete(this.adjanacylist[v]);
    }

    dispaly(){
        for(let mylist in this.adjanacylist){
            console.log(mylist+"....>"+[...this.adjanacylist[mylist]]);
        }
    }
}

const grp=new Graph();
grp.addVertex(1);
grp.addVertex(2);
grp.addVertex(3);
grp.addVertex(4);

grp.addEdges(1,2);
grp.addEdges(1,3);
grp.addEdges(1,4);
grp.addEdges(2,3);
grp.addEdges(2,4);
grp.addEdges(3,4);
grp.dispaly();

console.log('deletion')

grp.deleteVertex(4);
grp.addEdges(2,3);
grp.dispaly();