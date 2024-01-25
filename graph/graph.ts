export default class Graph {
    private vertices: string[];
    private edges: Map<string, string[]>;
  
    constructor() {
      this.vertices = [];
      this.edges = new Map();
    }
  
    addVertex(vertex: string): void {
      if (!this.vertices.includes(vertex)) {
        this.vertices.push(vertex);
        this.edges.set(vertex, []);
      }
    }
  
    addEdge(vertex1: string, vertex2: string): void {
      if (this.vertices.includes(vertex1) && this.vertices.includes(vertex2)) {
        this.edges.get(vertex1)?.push(vertex2);
        this.edges.get(vertex2)?.push(vertex1);
      }
    }
  
    hasVertex(vertex: string): boolean {
      return this.vertices.includes(vertex);
    }
  
    getAdjacencyList(vertex: string): string[] {
      return this.edges.get(vertex) || [];
    }

    getEdges() {
        return this.edges
    }
}
