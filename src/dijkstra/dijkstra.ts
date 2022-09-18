function dijkstra(graph = {}) {
	 let parents = getNodeParents(graph);
	 let costs = {
	 	 ...graph['start'],
	 	 end: Infinity
  };
	 let processed = [];

	 let node = getLowestCostNode(graph, costs, processed);
	 while (node) {
	 	  let cost = costs[node];
	 	  let neighbors = graph[node];
	 	  for (let n of Object.keys(neighbors)) {
	 	    let newCost = cost + neighbors[n];
	 	    if (costs[n] > newCost) {
	 	    	  costs[n] = newCost;
	 	    	  parents[n] = node;
	 	    }
	 	  }
	 	  processed.push(node);
	 	  node = getLowestCostNode(graph, costs, processed);
	 }
	 return costs['end'];
}

function getLowestCostNode(graph, costs, processed) {
	 let lowestCost = Infinity;
	 let lowestCostNode = null;
	 Object.keys(costs).forEach(node => {
	 	 let cost = costs[node];
	 	 if (cost < lowestCost && !processed.includes(node)) {
	 	 	 lowestCost = cost;
	 	 	 lowestCostNode = node;
	 	 }
	 });
	 return lowestCostNode;
}

function getNodeParents(graph = {}) {
	 let parents = {};
	 Object.entries(graph)
	   .forEach(([k, v]) => {
	   	  const children = Object.keys(v);
	   	  if (!children.length) {
	   	  	 parents[k] = null;
	   	  } else {
	   	  	 children.filter(c => !parents[c])
	   	      .forEach(c => parents[c] = k);
	   	  }
	   });
	 return parents;
}

export default function test() {
	const graph = {
		 start: { a: 6, b: 2 },
		 a: { end: 1 },
		 b: { a: 3, end: 5 },
		 end: {}
	};
	console.log(dijkstra(graph));
}
