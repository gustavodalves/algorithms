import DFS from './dfs';
import Graph from './graph';

describe('DFS', () => {
  let graph: Graph;
  let dfs: DFS;

  beforeEach(() => {
    graph = new Graph();
    dfs = new DFS(graph);
  });

  it('should perform DFS on the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');

    const dfsResult = dfs.dfs('A');

    expect(dfsResult).toEqual(['A', 'B', 'D', 'C']);
  });
});
