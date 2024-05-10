class Graph{
    constructor(size){
        this.size=size;
        this.adj=new Array(this.size);
        //add vertex
        for(let i=0;i<size;i++){
            this.adj[i]=[];
        }
    }

    //add Edges

    addEdge(v1,v2){
        this.adj[v1].push(v2);
    }

    //Backtracking for visiting

    backTracking(v,visited){

        visited[v]=true;
        console.log(v+" ");
        for(let i of this.adj){
            if(!visited[i]){
            this.backTracking(i,visited);
            }
        }

      
    }

    DFS(v){
        let visited=new Array(this.size);
        for(let i=0;i<this.size;i++){
                visited[i]=false;
            }
        
            this.backTracking(this.size,visited);

    }

}

g=new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.DFS(2);