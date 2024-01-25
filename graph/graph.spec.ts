import Graph from "./graph";

describe('Graph', () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add vertices to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    expect(graph.getEdges().size).toBe(3);
    expect(graph.hasVertex('A')).toBe(true);
    expect(graph.hasVertex('D')).toBe(false);
  });

  test('should add edges to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');

    expect(graph.getEdges().get('A')).toEqual(['B', 'C']);
    expect(graph.getEdges().get('B')).toEqual(['A']);
    expect(graph.getEdges().get('C')).toEqual(['A']);
  });

  test('should get adjacency list for a vertex', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');

    expect(graph.getAdjacencyList('A')).toEqual(['B', 'C']);
    expect(graph.getAdjacencyList('B')).toEqual(['A', 'C']);
    expect(graph.getAdjacencyList('C')).toEqual(['A', 'B']);
    expect(graph.getAdjacencyList('D')).toEqual([]);
  });
});
