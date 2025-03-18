function getKnightMoves(x, y) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const validMoves = [];

  for (let [dx, dy] of moves) {
    let nx = x + dx;
    let ny = y + dy;
    if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
      validMoves.push([nx, ny]);
    }
  }
  return validMoves;
}

function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return [start];

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [[x, y], path] = queue.shift();

    for (let move of getKnightMoves(x, y)) {
      let [nx, ny] = move;
      if (nx === end[0] && ny === end[1]) {
        return [...path, move];
      }
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, [...path, move]]);
      }
    }
  }
}
