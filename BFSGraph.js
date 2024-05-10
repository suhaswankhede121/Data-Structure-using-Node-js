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


    BFS(startnode){
        let visited=new Array(this.size);
        for(let i=0;i<this.size;i++){
            visited[i]=false;
        }

        let queue=[];

       visited[startnode]=true;
       queue.push(startnode);

       while(queue.length>0){
        startnode=queue[0];
        console.log(startnode+" ");
        queue.shift();

        this.adj[startnode].forEach((adjecentnode) => {
            if(!visited[adjecentnode]){
                visited[adjecentnode]=true;
                queue.push(adjecentnode);
            }
        });
       }
    }
}



g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

g.BFS(2);
