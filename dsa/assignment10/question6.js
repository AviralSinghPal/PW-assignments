function towerOfHanoiUtil(n, fromRod, toRod, auxRod, result) {
    if (n === 1) {
      result.push(`move disk 1 from rod ${fromRod} to rod ${toRod}`);
      return 1;
    }
    
    const move1 = towerOfHanoiUtil(n - 1, fromRod, auxRod, toRod, result);
    result.push(`move disk ${n} from rod ${fromRod} to rod ${toRod}`);
    const move2 = towerOfHanoiUtil(n - 1, auxRod, toRod, fromRod, result);
    
    return move1 + 1 + move2;
  }
  
  function towerOfHanoi(N) {
    const result = [];
    const moves = towerOfHanoiUtil(N, 1, 3, 2, result);
    result.push(moves.toString());
    return result;
  }
  
  const N = 3;
  const result = towerOfHanoi(N);
  console.log(result); // Output: ["move disk 1 from rod 1 to rod 3", "move disk 2 from rod 1 to rod 2", "move disk 1 from rod 3 to rod 2", "move disk 3 from rod 1 to rod 3", "move disk 1 from rod 2 to rod 1", "move disk 2 from rod 2 to rod 3", "move disk 1 from rod 1 to rod 3", "7"]
  