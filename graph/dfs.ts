import Graph from "./graph";

export default class DFS{
    constructor(
        private graph: Graph
    ) {}
    
    dfs(startingVertex: string): string[] {
        const visited: { [key: string]: boolean } = {};
        const result: string[] = [];

        const dfsRecursive = (currentVertex: string) => {
          visited[currentVertex] = true;
          result.push(currentVertex);
    
          const neighbors = this.graph.getEdges().get(currentVertex) || [];

          for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
              dfsRecursive(neighbor);
            }
          }
        };

        dfsRecursive(startingVertex);
    
        return result;
    }
}
