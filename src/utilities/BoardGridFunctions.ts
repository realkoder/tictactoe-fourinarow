
export const generateBoardGrid = (row: number, col: number) => {
    return Array.from({ length: row }, () => Array.from({ length: col }, () => ""));
}


type Grid = string[][];

export const checkFourInRow = (grid: Grid) => {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Check horizontally
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col <= numCols - 4; col++) {
            const sequence = grid[row].slice(col, col + 4).join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check vertically
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row <= numRows - 4; row++) {
            const sequence = [grid[row][col], grid[row + 1][col], grid[row + 2][col], grid[row + 3][col]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check diagonally (from top-left to bottom-right)
    for (let row = 0; row <= numRows - 4; row++) {
        for (let col = 0; col <= numCols - 4; col++) {
            const sequence = [grid[row][col], grid[row + 1][col + 1], grid[row + 2][col + 2], grid[row + 3][col + 3]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    // Check diagonally (from top-right to bottom-left)
    for (let row = 0; row <= numRows - 4; row++) {
        for (let col = numCols - 1; col >= 3; col--) {
            const sequence = [grid[row][col], grid[row + 1][col - 1], grid[row + 2][col - 2], grid[row + 3][col - 3]].join('');
            if (sequence === 'XXXX' || sequence === 'OOOO') {
                return sequence[0];
            }
        }
    }

    return null;
}