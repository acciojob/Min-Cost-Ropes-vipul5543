function mincost(arr)
{ 
//write your code here
// return the min cost
	  if (arr.length <= 1) {
    return 0; // No cost if there's 0 or 1 rope
  }

  // Create a min-heap (priority queue)
  const heap = [...arr].sort((a, b) => a - b);

  let totalCost = 0;

  while (heap.length > 1) {
    // Remove the two smallest ropes
    const first = heap.shift();
    const second = heap.shift();

    // Connect them and add the cost
    const cost = first + second;
    totalCost += cost;

    // Add the new rope back to the heap and maintain the sort order
    heap.push(cost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports=mincost;
